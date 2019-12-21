import React from 'react'
import PropTypes from 'prop-types'

import classes from './Ingredient.module.css'

const ingredient = (props) => {
  const ingredient = getIngredientFromType(props.type)
  return (
    ingredient
  )
}

const getIngredientFromType = (type) => {
  let ingredient = null

  // Besides bread-top, all ingredients are essentially divs with their type
  // being their classname
  switch (type) {
    case 'BreadTop':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      )
      break
    default:
      ingredient = (
        <div className={classes[type]} />
      )
  }

  return ingredient
}

const ingredientList = {
  breadTop: 'BreadTop',
  breadBottom: 'BreadBottom',
  meat: 'Meat',
  salad: 'Salad',
  cheese: 'Cheese',
  bacon: 'Bacon'
}

const ingredientsOrder = [
  ingredientList.breadTop,
  ingredientList.salad,
  ingredientList.cheese,
  ingredientList.bacon,
  ingredientList.meat,
  ingredientList.breadBottom
]

ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default ingredient
export { ingredientList, ingredientsOrder }
