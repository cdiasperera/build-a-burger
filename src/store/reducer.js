import { combineReducers } from 'redux'

import builderReducer from './reducers/orderReducer'

export default combineReducers({
  builder: builderReducer
})
