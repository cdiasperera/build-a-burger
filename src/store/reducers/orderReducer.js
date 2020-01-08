import ACTIONS from '../actions/actions'

const initialState = {
  ingredients: null,
  price: 0
}

const orderReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case (ACTIONS.order):
      return {
        ...prevState,
        ingredients: action.ingredients,
        price: action.price
      }
    default:
      return prevState
  }
}

export default orderReducer
