import React, { Component } from 'react'
import axios from '../../axios'
import { connect } from 'react-redux'

import { build, init } from '../../store/actions/builder'

import Burger, { calculateCost } from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class BurgerBuilder extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checkingOut: false,
      loading: false
    }
  }

  componentDidMount = async () => {
    try {
      this.setState({ loading: true })
      const ingredients = (await axios.get('/Ingredients.json')).data
      const price = calculateCost(ingredients)
      this.props.initOrder(ingredients, price)
      this.setState({ loading: false })
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  checkOut = () => {
    this.setState({ checkingOut: true })
  }

  exitCheckout = () => {
    this.setState({ checkingOut: false })
  }

  continueCheckout = () => {
    this.props.history.push({ pathname: '/checkout' })
  }

  render = () => {
    const disabledDecrements = []
    let disableCheckout = true
    for (const key in this.props.ingredients) {
      if (this.props.ingredients[key] <= 0) {
        disabledDecrements.push(key)
      } else {
        // We have found one ingredient that has been added, so we can enable
        // the checkout button
        disableCheckout = false
      }
    }

    let modalContent = null
    if (this.state.loading || !this.props.ingredients) {
      modalContent = <Spinner />
    } else {
      modalContent = (
        <OrderSummary
          ingredients={this.props.ingredients}
          price={this.props.price}
          exitCheckout={this.exitCheckout}
          continueCheckout={this.continueCheckout}
        />
      )
    }

    let burger = null
    if (this.props.ingredients) {
      burger = <Burger ingredients={this.props.ingredients} />
    }

    let controls = null
    if (this.props.ingredients) {
      controls = (
        <BuildControls
          adjustIngredients={this.props.adjustOrder}
          disabledDecrements={disabledDecrements}
          price={this.props.price}
          disableCheckout={disableCheckout}
          handleCheckOut={this.checkOut}
        />
      )
    }

    let page = null
    if (this.state.loading) {
      page = <Spinner />
    } else {
      page = (
        <>
          {burger}
          {controls}
        </>
      )
    }
    return (
      <>
        <Modal
          show={this.state.checkingOut}
          removeBackdrop={this.exitCheckout}
        >
          {modalContent}
        </Modal>
        {page}
      </>
    )
  }
}

const mapStateToProps = state => ({
  ingredients: state.builder.ingredients,
  price: state.builder.price
})

const mapDispatchToProps = dispatch => {
  const adjustOrder = (ingredient, adjustType) => dispatch(
    build(ingredient, adjustType)
  )

  const initOrder = (ingredients, price) => dispatch(
    init(ingredients, price)
  )

  return {
    adjustOrder,
    initOrder
  }
}

export default withErrorHandler(
  connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder),
  axios
)
