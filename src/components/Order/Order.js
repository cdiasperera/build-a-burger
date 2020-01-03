import React from 'react'

import { INGREDIENTS_ORDER, INGREDIENT_LIST }
  from '../Burger/Ingredient/Ingredient'

import classes from './Order.module.css'

const Order = ({ ingredients, price }) => {
  const ingredientSummary = []
  for (const ingredient of INGREDIENTS_ORDER) {
    if (
      ingredient !== INGREDIENT_LIST.breadTop &&
      ingredient !== INGREDIENT_LIST.breadBottom
    ) {
      ingredientSummary.push(
        <p key={ingredient}> {ingredient}: {ingredients[ingredient]}</p>
      )
    }
  }

  return (
    <div className={classes.Order}>
      <p>Ingredients: </p>
      {ingredientSummary}
      <p>Price: <strong>{price}</strong></p>
    </div>
  )
}

export default Order
