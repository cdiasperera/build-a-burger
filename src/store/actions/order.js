import ACTIONS from './actionTypes'

const order = (ingredient, adjustType) => {
  return { type: ACTIONS.ORDER, ingredient, adjustType }
}

const init = (ingredients, price) => {
  return { type: ACTIONS.INIT, ingredients, price }
}

export { order, init }
