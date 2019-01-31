import React from 'react';
import {Route, Switch} from 'react-router';
import AuthContainer from '../containers/AuthContainer';
import FeedContainer from "../containers/FeedContainer";

const routes = (
    <div>
        <Switch>
            <Route
                exact
                path="/"
                component={FeedContainer}
            />
            <Route
                path="/api-auth"
                component={AuthContainer}
            />
        </Switch>
    </div>
);
export default routes