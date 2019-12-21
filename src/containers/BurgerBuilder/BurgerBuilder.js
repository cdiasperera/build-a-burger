import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import { INGREDIENT_LIST, INGREDIENTS_PRICE } from
  '../../components/Burger/Ingredient/Ingredient'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
      price: INGREDIENTS_PRICE.base
    }
  }

  adjustIngredients = (type, adjustType) => {
    let newPrice = this.state.price
    const ingredients = { ...this.state }.ingredients
    ingredients[INGREDIENT_LIST[type]] += adjustType

    if (ingredients[INGREDIENT_LIST[type]] < 1) {
      ingredients[INGREDIENT_LIST[type]] = 0
    } else {
      newPrice += adjustType * INGREDIENTS_PRICE[INGREDIENT_LIST[type]]
    }

    const newState = {
      ingredients: ingredients,
      price: newPrice
    }

    this.setState(newState)
  }

  a = 1

  render = () => {
    const disabledDecrements = []

    for (const key in this.state.ingredients) {
      if (this.state.ingredients[key] <= 0) {
        disabledDecrements.push(key)
      }
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          adjustIngredients={this.adjustIngredients}
          disabledDecrements={disabledDecrements}
        />
      </>
    )
  }
}

export default BurgerBuilder
