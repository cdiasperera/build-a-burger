import React from 'react'
import PropTypes from 'prop-types'

import classes from './Ingredient.module.css'

const ingredient = ({ type }) => {
  const ingredient = getIngredientFromType(type)
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

const INGREDIENT_LIST = {
  breadTop: 'BreadTop',
  breadBottom: 'BreadBottom',
  meat: 'Meat',
  salad: 'Salad',
  cheese: 'Cheese',
  bacon: 'Bacon'
}

const INGREDIENTS_ORDER = [
  INGREDIENT_LIST.breadTop,
  INGREDIENT_LIST.salad,
  INGREDIENT_LIST.cheese,
  INGREDIENT_LIST.bacon,
  INGREDIENT_LIST.meat,
  INGREDIENT_LIST.breadBottom
]

const INGREDIENTS_PRICE = {
  base: 0
}
INGREDIENTS_PRICE[INGREDIENT_LIST.salad] = 0.5
INGREDIENTS_PRICE[INGREDIENT_LIST.cheese] = 0.4
INGREDIENTS_PRICE[INGREDIENT_LIST.bacon] = 0.7
INGREDIENTS_PRICE[INGREDIENT_LIST.meat] = 1.3

ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default ingredient
export { INGREDIENT_LIST, INGREDIENTS_ORDER, INGREDIENTS_PRICE }
