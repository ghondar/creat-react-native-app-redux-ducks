import { combineReducers } from 'redux'

import home from './home'

export default combineReducers({
  [home.store]: home.reducer
})
