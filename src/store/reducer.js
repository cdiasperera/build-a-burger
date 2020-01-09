import { combineReducers } from 'redux'

import builderReducer from './reducers/builderReducer'
export default combineReducers({
  builder: builderReducer
})
