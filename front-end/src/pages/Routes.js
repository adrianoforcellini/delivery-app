import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login/Login';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route exact path="/" component={ Login } />
        {/* <Route Component={NotFound} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;
