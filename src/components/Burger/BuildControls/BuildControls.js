import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import { ingredientList } from '../Ingredient/Ingredient'

import classes from './BuildControls.module.css'

const buildControls = (props) => {
  const controls = createControls(ingredientList, props.adjustIngredients)

  return (
    <div className={classes.BuildControls}>
      {controls}
    </div>
  )
}

const createControls = (ingredientList, adjustmentHandler) => {
  const controls = []
  for (const ingredient in ingredientList) {
    if (ingredient !== 'breadTop' && ingredient !== 'breadBottom') {
      const label = ingredientList[ingredient]
      controls.push(
        <BuildControl
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
