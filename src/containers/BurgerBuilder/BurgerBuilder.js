import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import { ingredientList } from '../../components/Burger/Ingredient/Ingredient'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  constructor (props) {
    super(props)
    const ingredients = {}
    ingredients[ingredientList.salad] = 0
    ingredients[ingredientList.meat] = 1
    ingredients[ingredientList.cheese] = 0
    ingredients[ingredientList.bacon] = 0
    this.state = { ingredients }
  }

  adjustIngredients = (type, adjustType) => {
    const ingredients = { ...this.state }.ingredients
    ingredients[ingredientList[type]] += adjustType

    if (ingredients[ingredientList[type]] < 1) {
      ingredients[ingredientList[type]] = 0
    }
    this.setState(ingredients)
  }

  a = 1

  render = () => {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls adjustIngredients={this.adjustIngredients} />
      </>
    )
  }
}

export default BurgerBuilder
