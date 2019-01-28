import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {Feed} from '../components';
import AuthContainer from '../containers/AuthContainer';
import api from '../api';

const AuthApiRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        api.apiType ? <Component {...props} />
            : <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
    )} />
);

const routes = (
    <div>
        <Switch>
            <Route
                exact
                path="/"
                component={Feed}
            />
            <AuthApiRoute
                path="/api-auth"
                component={AuthContainer}
            />
        </Switch>
    </div>
);
export default routes