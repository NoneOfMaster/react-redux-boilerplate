import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import birds from './birds';
import planes from './planes';

const rootReducer = combineReducers({birds, planes, routing: routerReducer });

export default rootReducer;
