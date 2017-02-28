import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sampleReducer from './sampleReducer';
import sampleReducerEtc from './sampleReducer';

const rootReducer = combineReducers({sampleReducer, sampleReducerEtc, routing: routerReducer });

export default rootReducer;
