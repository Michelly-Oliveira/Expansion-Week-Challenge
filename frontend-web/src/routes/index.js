import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import EditProfile from '../pages/EditProfile';
import Feed from '../pages/Feed';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/edit_profile" component={EditProfile} />
      </Switch>
    </BrowserRouter>
  );
}
