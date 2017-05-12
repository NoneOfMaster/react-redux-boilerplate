import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers must match the parts of state being updated because they are being added to state
// http://stackoverflow.com/a/33678198/5557599
import birds from './birds'
import planes from './planes'

const rootReducer = combineReducers({birds, planes, routing: routerReducer })

export default rootReducer
