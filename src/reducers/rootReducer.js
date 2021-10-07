import { combineReducers } from 'redux'

import {beansReducer} from  './beansReducer'
import { varietyReducer } from './varietyReducer';


export const rootReducer = combineReducers({ 
    beans: beansReducer, varieties: varietyReducer
});
