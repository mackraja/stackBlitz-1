/**
 * Created by mack on 10/2/19.
 */
import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../containers/Login';

const routes = (
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
);

export default routes;