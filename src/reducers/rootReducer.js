import { combineReducers } from 'redux'

import {beansReducer} from  './beansReducer'


export const rootReducer = combineReducers({ 
    beans: beansReducer
});
