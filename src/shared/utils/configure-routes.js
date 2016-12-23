/**
 * Module with the config of the router.
 * @module src/shared/containers/router
 */

// React.
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Utils.
import { authRules } from '../utils/';

// App Config.
import * as routes from '../constants/routes';

// Components.
import {
  App,
  LoginContainer,
  Dashboard,
  PackageReception,
  RoutesAssign
} from '../../client/containers/';
import { NotFound } from '../../client/components/';

/**
 * Configure the routes with the auth settings.
 * @param {Object} store -> The redux store.
 * @returns {Any} -> The list of routes.
 */
const configureRoutes = (store) => {
  const connect = fn =>
    (nextState, replaceState) => fn(store, nextState, replaceState);

  return (
    <Route path={routes.DASHBOARD} component={App}>
      <IndexRoute
        component={authRules.userIsAuthenticated(Dashboard)}
        onEnter={connect(authRules.userIsAuthenticated.onEnter)}
      />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};

export default configureRoutes;