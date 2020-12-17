import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoutes = ({ component, path, exact, location }) => {
  const authenticated = useSelector(
    state => state.authenticateReducer.authenticated,
  );

  return authenticated ? (
    <Redirect to={{ pathname: '/', state: { from: location } }} />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};
export default PublicRoutes;
