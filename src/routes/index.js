import React from 'react';
import {Route, Switch} from 'react-router';
import {Feed, Auth} from '../components';

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Feed}/>
            <Route path="/auth" component={Auth}/>
        </Switch>
    </div>
);
export default routes