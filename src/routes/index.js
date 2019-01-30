import React from 'react';
import {Route, Switch} from 'react-router';
import {Feed} from '../components';
import AuthContainer from '../containers/AuthContainer';

const routes = (
    <div>
        <Switch>
            <Route
                exact
                path="/"
                component={Feed}
            />
            <Route
                path="/api-auth"
                component={AuthContainer}
            />
        </Switch>
    </div>
);
export default routes