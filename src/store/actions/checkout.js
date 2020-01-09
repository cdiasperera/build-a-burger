
import ACTIONS from './actionTypes'

const order = (id, orderData) => {
  return { type: ACTIONS.ORDER, id, orderData }
}

const getMaxID = () => {
  return { type: ACTIONS.GETID }
}

export { order, getMaxID }
