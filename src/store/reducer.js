import { combineReducers } from 'redux'

import builderReducer from './reducers/builderReducer'
import checkoutReducer from './reducers/checkoutReducer'
export default combineReducers({
  builder: builderReducer,
  order: checkoutReducer
})
