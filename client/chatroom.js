import React from 'react';
import {render} from 'react-dom';
import * as actionCreators from './actions/actionCreator';
import store from './store';
import {Provider} from 'react-redux';
import css from './styles/style.styl';

import App from './components/App';
import ChatRoomView from './components/ChatRoomView';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';


const router = (
	<Provider store={store}>
	<Router history={browserHistory}>
	<Route path={"/"} component={App}>
	<IndexRoute component={ChatRoomView}></IndexRoute>
	</Route>
	</Router>
	</Provider>

)

const rendered = ()=> {
	render(router, document.getElementById('root'))
};

store.subscribe(rendered)

rendered();