import ACTIONS from '../actions/actionTypes'

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
}

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_START:
      return {
        ...prevState,
        error: null,
        loading: true
      }
    case ACTIONS.AUTH_SUCCESS:
      return {
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
      }
    case ACTIONS.AUTH_FAILURE:
      return {
        token: null,
        userId: null,
        error: action.error,
        loading: false
      }
    default:
      return prevState
  }
}

export default authReducer
