import React, { Component } from 'react'
import axios from '../../axios'

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
      ingredients: null,
      price: 0,
      checkingOut: false,
      loading: false
    }
  }

  componentDidMount = async () => {
    try {
      const ingredients = (await axios.get('/Ingredients.json')).data
      const price = this.calculateCost(ingredients)
      this.setState({ ingredients: ingredients, price: price })
    } catch (err) {
      console.log(err)
    }
  }

  componentWillUnmount = () => {
  }

  adjustIngredients = (type, adjustType) => {
    const ingredients = { ...this.state }.ingredients
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
    this.props.history.push('/checkout')
  }

  render = () => {
    const disabledDecrements = []
    let disableCheckout = true
    for (const key in this.state.ingredients) {
      if (this.state.ingredients[key] <= 0) {
        disabledDecrements.push(key)
      } else {
        // We have found one ingredient that has been added, so we can enable
        // the checkout button
        disableCheckout = false
      }
    }

    let modalContent = null
    if (this.state.loading || !this.state.ingredients) {
      modalContent = <Spinner />
    } else {
      modalContent = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.price}
          exitCheckout={this.exitCheckout}
          continueCheckout={this.continueCheckout}
        />
      )
    }

    let burger = null
    if (this.state.ingredients) {
      burger = <Burger ingredients={this.state.ingredients} />
    }

    let controls = null
    if (this.state.ingredients) {
      controls = (
        <BuildControls
          adjustIngredients={this.adjustIngredients}
          disabledDecrements={disabledDecrements}
          price={this.state.price}
          disableCheckout={disableCheckout}
          handleCheckOut={this.checkOut}
        />
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
        {burger}
        {controls}
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)
