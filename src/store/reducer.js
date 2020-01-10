import { combineReducers } from 'redux'

import builderReducer from './reducers/builderReducer'
import authReducer from './reducers/authReducer'
export default combineReducers({
  builder: builderReducer,
  auth: authReducer
})
