import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import EditProfile from '../pages/EditProfile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/edit_profile" component={EditProfile} />
      </Switch>
    </BrowserRouter>
  );
}
