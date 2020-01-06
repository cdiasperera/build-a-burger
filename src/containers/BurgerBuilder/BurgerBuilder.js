import React, { Component } from 'react'
import axios from '../../axios'
import { connect } from 'react-redux'

import ACTIONS from '../../store/actions'

import Burger from '../../components/Burger/Burger'
import { INGREDIENT_LIST, INGREDIENTS_PRICE } from
  '../../components/Burger/Ingredient/Ingredient'
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
      const price = this.calculateCost(ingredients)
      this.props.setOrder(ingredients, price)
      this.setState({ ingredients: ingredients, price: price, loading: false })
    } catch (err) {
      console.log(err)
      this.setState({ loading: false })
    }
  }

  adjustIngredients = (type, adjustType) => {
    const ingredients = { ...this.props.ingredients }
    ingredients[INGREDIENT_LIST[type]] += adjustType

    if (ingredients[INGREDIENT_LIST[type]] < 1) {
      ingredients[INGREDIENT_LIST[type]] = 0
    }

    // Determine the new price. Convert it to two decimal places
    const newPrice = this.calculateCost(ingredients)

    const newState = {
      ingredients: ingredients,
      price: newPrice
    }

    this.props.setOrder(ingredients, newPrice)
    this.setState(newState)
  }

  calculateCost = (ingredients) => {
    let cost = 0
    for (const ingredient in ingredients) {
      // Amount * Value
      cost +=
        ingredients[ingredient] * INGREDIENTS_PRICE[ingredient]
    }
    return cost
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
          adjustIngredients={this.adjustIngredients}
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
  ingredients: state.order.ingredients,
  price: state.order.price
})

const mapDispatchToProps = dispatch => {
  const setOrder = (ingredients, price) => dispatch({
    type: ACTIONS.order, ingredients, price
  })
  return {
    setOrder
  }
}

export default withErrorHandler(
  connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder),
  axios
)
