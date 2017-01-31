import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import App from '../scripts/components/containers/app';
import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';
import Home from './components/containers/Home';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/home' component={Home}/>
    </Route>
  </Router>
);
export default router;
