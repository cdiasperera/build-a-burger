import React from 'react'
import PropTypes from 'prop-types'
import shortId from 'shortid'

import Ingredient, { INGREDIENTS_ORDER }
  from './Ingredient/Ingredient'

import classes from './Burger.module.css'

const START_MESSAGE = 'Please start adding ingredients!'

const Burger = ({ ingredients }) => {
  const { queue, message } = getBurgerQueue(ingredients)

  const burger = queue.map((ingredient) => {
    return (
      <Ingredient type={ingredient} key={shortId.generate()} />
    )
  })

  // If there is a message, add it between the buns
  if (message) {
    burger.splice(1, 0, message)
  }

  return (
    <div className={classes.Burger}>
      {burger}
    </div>
  )
}

const getBurgerQueue = (ingredients) => {
  // The number of ingredients added. We use this to see if no ingredients were
  // added
  let numIngredients = 0

  // For each type of ingredient, add it to a queue, which will then be used to
  // build the burger
  const queue = []
  for (const type of INGREDIENTS_ORDER) {
    for (let i = 0; i < ingredients[type]; i++) {
      queue.push(type)
      numIngredients++
    }
  }

  // Put a bun at the top/start of the stack
  queue.unshift('BreadTop')
  queue.push('BreadBottom')

  // If there are no ingredients, let the user know that they can start
  let message = null
  if (numIngredients === 0) {
    message = (
      <p key={shortId.generate()}>{START_MESSAGE}</p>
    )
  }
  return { queue, message }
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
}

Burger.defaultProps = {
  ingredients: {
    meat: 1
  }
}

export default Burger
