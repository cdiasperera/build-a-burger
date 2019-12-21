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

const ingredients = {
  breadTop: 'BreadTop',
  breadBottom: 'BreadBottom',
  meat: 'Meat',
  salad: 'Salad',
  cheese: 'Cheese',
  bacon: 'Bacon'
}

ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default ingredient
export { ingredients }
