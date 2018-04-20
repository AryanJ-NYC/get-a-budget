import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './containers/Home';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
