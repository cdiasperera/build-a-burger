import ACTIONS from './actionTypes'

const build = (ingredient, adjustType) => {
  return { type: ACTIONS.BUILD, ingredient, adjustType }
}

const init = (ingredients, price) => {
  return { type: ACTIONS.INIT, ingredients, price }
}

export { build, init }
