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
    const ingredients = {}
    ingredients[INGREDIENT_LIST.salad] = 0
    ingredients[INGREDIENT_LIST.meat] = 0
    ingredients[INGREDIENT_LIST.cheese] = 0
    ingredients[INGREDIENT_LIST.bacon] = 0

    this.state = {
      ingredients: ingredients,
      price: INGREDIENTS_PRICE.base,
      checkingOut: false,
      loading: false
    }
  }

  adjustIngredients = (type, adjustType) => {
    let newPrice = this.state.price
    const ingredients = { ...this.state }.ingredients
    ingredients[INGREDIENT_LIST[type]] += adjustType

    if (ingredients[INGREDIENT_LIST[type]] < 1) {
      ingredients[INGREDIENT_LIST[type]] = 0
    }

    // Determine the new price. Convert it to two decimal places
    newPrice += adjustType * INGREDIENTS_PRICE[INGREDIENT_LIST[type]]
    // Bounds check to make sure disabled button result is not subverted
    if (ingredients[INGREDIENT_LIST[type]] < 0) {
      newPrice = this.state.price
    }

    const newState = {
      ingredients: ingredients,
      price: newPrice
    }

    this.setState(newState)
  }

  checkOut = () => {
    this.setState({ checkingOut: true })
  }

  exitCheckout = () => {
    this.setState({ checkingOut: false })
  }

  continueCheckout = async () => {
    const order = { ...this.state.ingredients, ...this.state.price }
    try {
      const sendOrder = axios.post('/orders.json', order)
      this.setState({ loading: true })

      await sendOrder
      this.setState({ loading: false, checkingOut: false })
    } catch (err) {
      this.setState({ loading: false, checkingOut: false })
    }
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
    if (this.state.loading) {
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

    return (
      <>
        <Modal
          show={this.state.checkingOut}
          removeBackdrop={this.exitCheckout}
        >
          {modalContent}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          adjustIngredients={this.adjustIngredients}
          disabledDecrements={disabledDecrements}
          price={this.state.price}
          disableCheckout={disableCheckout}
          handleCheckOut={this.checkOut}
        />
      </>
    )
  }
}

export default withErrorHandler(BurgerBuilder, axios)
