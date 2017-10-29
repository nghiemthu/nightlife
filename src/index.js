import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import ResultView from './components/ResultView';

import reducers from './reducers/index';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    	<BrowserRouter>
   		<div>
   			<Switch>
   			  <Route path="/results" component={ResultView} />
   				<Route path="/" component={App} />
   			</Switch>
   		</div>
   	</BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);