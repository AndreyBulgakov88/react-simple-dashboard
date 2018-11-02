import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from "react-router-dom";
import * as actionTypes  from './store/login/actionTypes';
import Header from './containers/common/Header';
import App from './App';
import Login from './containers/auth/Login';
import SettingsScreen from './containers/SettingsScreen';
import DashboardApiDetailsScreen from './containers/DashboardApiDetailsScreen';
import requireAuth from './containers/hoc/RequireAuth';
import requireNotAuth from './containers/hoc/RequireNotAuth';
import './index.css';
import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: actionTypes.AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div className="container mt-5">
          <div className="col-sm-12 col-sm-offset-2 ">
            <Route exact path="/" component={requireAuth(App)} />
            <Route path="/settings" component={requireAuth(SettingsScreen)} />
            <Route path="/api/:apiId" component={requireAuth(DashboardApiDetailsScreen)} />
            <Route path="/login" component={requireNotAuth(Login)} />
          </div>
        </div> 
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
