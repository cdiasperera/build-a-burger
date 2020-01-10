import ACTIONS from './actionTypes'

const authStart = () => ({
  type: ACTIONS.AUTH_START
})

const authSuccess = (authData) => ({
  type: ACTIONS.AUTH_SUCCESS,
  authData
})

const authFailure = (error) => ({
  type: ACTIONS.AUTH_FAILURE,
  error
})

const auth = (email, password) => {
  console.log('authing')
  return dispatch => dispatch(authStart())
}

export { auth, authFailure, authSuccess }
