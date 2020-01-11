import ACTIONS from './actionTypes'
import axios from 'axios'

import { PURPOSES } from '../../containers/Auth/Auth'

const authStart = () => ({
  type: ACTIONS.AUTH_START
})

const authSuccess = (token, userId) => ({
  type: ACTIONS.AUTH_SUCCESS,
  token,
  userId
})

const authFailure = (error) => ({
  type: ACTIONS.AUTH_FAILURE,
  error
})

const logout = () => ({
  type: ACTIONS.AUTH_LOGOUT
})

// Expire Time is in seconds
const checkAuthTimeout = (expireTime) => async dispatch => {
  try {
    // setTimeoute works on milliseconds, hence the factor of 1000
    setTimeout(() => {
      dispatch(logout())
    }, expireTime * 1000)
  } catch (err) {
    dispatch(authFailure(err))
  }
}

const auth = (email, password, method) => async dispatch => {
  try {
    dispatch(authStart())
    const authData = {
      email,
      password,
      returnSecureToken: true
    }

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
    const key = 'AIzaSyDGHkt6LW23-228fQ1mffprKCX68DF5Tyk'
    let endpoint = ''
    switch (method) {
      case PURPOSES.signIn:
        endpoint = url + 'signInWithPassword?key=' + key
        break
      default:
        endpoint = url + 'signUp?key=' + key
    }
    const returnData = (await axios.post(endpoint, authData)).data
    dispatch(authSuccess(returnData.idToken, returnData.localId))
    dispatch(checkAuthTimeout(returnData.expiresIn))
  } catch (err) {
    dispatch(authFailure(err.response.data.error))
  }
}

export { auth, authFailure, authSuccess, logout }
