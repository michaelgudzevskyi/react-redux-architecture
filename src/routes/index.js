import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Dashboard from '~/pages/Dashboard';

import Private from './private';
import Public from './public';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Private path="/" exact component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
