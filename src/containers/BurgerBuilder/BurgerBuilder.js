import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import { ingredientList } from '../../components/Burger/Ingredient/Ingredient'

class BurgerBuilder extends Component {
  constructor (props) {
    super(props)
    const ingredients = {}
    ingredients[ingredientList.salad] = 0
    ingredients[ingredientList.meat] = 1
    ingredients[ingredientList.cheese] = 0
    ingredients[ingredientList.bacon] = 0
    this.state = ingredients
  }

  render = () => {
    return (
      <>
        <Burger ingredients={this.state} />
        <div>BuildControls</div>
      </>
    )
  }
}

export default BurgerBuilder
