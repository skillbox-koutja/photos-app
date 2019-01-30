import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers';

export const history = createBrowserHistory({
    // basename: process.env.PUBLIC_URL,
});

let middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//     middleware = [...middleware, logger];
// }
middleware = [...middleware, logger];
export default function configureStore(preloadedState) {
    console.log(preloadedState);
    return createStore(
        createRootReducer(history, preloadedState), // root reducer with router state
        compose(
            applyMiddleware(
                ...middleware,
                routerMiddleware(history), // for dispatching history actions
            ),
        ),
    )
}
