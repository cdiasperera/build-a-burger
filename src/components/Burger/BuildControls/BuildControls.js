import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import { INGREDIENT_LIST } from '../Ingredient/Ingredient'

import classes from './BuildControls.module.css'

const buildControls = (props) => {
  const controls = createControls(INGREDIENT_LIST,
    props.adjustIngredients,
    props.disabledDecrements)

  return (
    <div className={classes.BuildControls}>
      <strong><p>Current Price: {props.price.toFixed(2)}</p></strong>
      {controls}
      <button
        className={classes.OrderButton}
        onClick={props.handleCheckOut}
        disabled={props.disableCheckout}
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
