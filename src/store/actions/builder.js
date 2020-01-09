import ACTIONS from './actionTypes'

const burger = (ingredient, adjustType) => {
  return { type: ACTIONS.BUILD, ingredient, adjustType }
}

const init = (ingredients, price) => {
  return { type: ACTIONS.INIT, ingredients, price }
}

export { burger, init }
