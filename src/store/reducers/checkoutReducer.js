import ACTIONS from '../actions/actionTypes'
const initalState = {
  maxID: 0,
  orderData: null
}

const checkoutReducer = (prevState = initalState, action) => {
  switch (action.type) {
    case ACTIONS.GETID:
      break
    case ACTIONS.ORDER:
      break
    default:
      return prevState
  }
}

export default checkoutReducer
