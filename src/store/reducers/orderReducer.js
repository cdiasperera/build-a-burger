import ACTIONS from '../actions/actionTypes'
const initalState = {
  maxID: 0,
  orderData: null
}

const orderReducer = (prevState = initalState, action) => {
  switch (action.type) {
    case ACTIONS.GETID:
      break
    case ACTIONS.ORDER:
      break
    default:
      return prevState
  }
}

export default orderReducer
