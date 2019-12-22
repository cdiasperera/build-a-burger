import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import { INGREDIENT_LIST } from '../Ingredient/Ingredient'

import classes from './BuildControls.module.css'

const buildControls = ({
  adjustIngredients,
  disabledDecrements,
  price,
  handleCheckOut,
  disableCheckout
}) => {
  const controls = createControls(INGREDIENT_LIST,
    adjustIngredients,
    disabledDecrements)

  return (
    <div className={classes.BuildControls}>
      <strong><p>Current Price: {price.toFixed(2)}</p></strong>
      {controls}
      <button
        className={classes.OrderButton}
        onClick={handleCheckOut}
        disabled={disableCheckout}
      >
      CHECKOUT
      </button>
    </div>
  )
}

const createControls = (INGREDIENT_LIST,
  adjustmentHandler,
  disabledDecrements) => {
  const controls = []
  for (const ingredient in INGREDIENT_LIST) {
    if (ingredient !== 'breadTop' && ingredient !== 'breadBottom') {
      const label = INGREDIENT_LIST[ingredient]
      controls.push(
        <BuildControl
          disabledDecrement={disabledDecrements.includes(label)}
          label={label}
          key={ingredient}
          handleAdjustment={adjustmentHandler.bind(this, ingredient)}
        />
      )
    }
  }

  return controls
}

export default buildControls
