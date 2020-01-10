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
  } catch (err) {
    dispatch(authFailure(err.response.data.error))
  }
}

export { auth, authFailure, authSuccess }
