import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import reverseReducer from './reverseReducer';
import quotesReducer from './quotesReducer';
import palindromeReducer from './palindromeReducer'

const rootReducer = combineReducers({reverse:reverseReducer,quotes:quotesReducer,
	palindrome:palindromeReducer,
	routing:routerReducer});

export default rootReducer;