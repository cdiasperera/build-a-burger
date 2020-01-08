import ACTIONS from './actionTypes'

const order = (ingredient, adjustType) => {
  return { type: ACTIONS.ORDER, ingredient, adjustType }
}

export { order }
