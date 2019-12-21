import React from 'react'
import PropTypes from 'prop-types'

import Ingredient from './Ingredient/Ingredient'

import classes from './Burger.module.css'

const burger = (props) => {
  const burger = props.ingredients.map((ingredient) => {
    return (
      <Ingredient type={ingredient} />
    )
  })

  return (
    <div className={classes.Burger}>
      {burger}
    </div>
  )
}

burger.propTypes = {
  ingredients: PropTypes.array.isRequired
}

burger.defaultProps = {
  ingredients: ['Meat']
}

export default burger
