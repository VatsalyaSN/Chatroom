import logger from 'redux-logger';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger'
import {createStore, compose ,applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
// import listOfEvents from './data/listOfEvents';
// import thunkMiddleware from 'redux-thunk';


const defaultState={
	reverse : {
		reverseData : [],
		editCheck :false,
		editItem : {}
	}
	,

	quotes : {
		quoData : [],
		quoeditCheck :false,
		quoeditItem : {}
	},

	palindrome : {
		palData : [],
		paleditCheck :false,
		paleditItem : {}
	}

}

const store = createStore(rootReducer,defaultState,applyMiddleware(
    logger
  ));

store.subscribe(()=>
	console.log("store changed", store.getState()))

export default store;