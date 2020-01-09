import { combineReducers } from 'redux'

import builderReducer from './reducers/builderReducer'
import { orderReducer } from './reducers/orderReducer'
export default combineReducers({
  builder: builderReducer,
  order: orderReducer
})
