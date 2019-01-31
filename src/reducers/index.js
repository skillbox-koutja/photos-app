import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {createUserReducer} from './user';
import {createFeedReducer} from './feed';

export default (history, preloadedState) => {
    return combineReducers({
        user: createUserReducer(preloadedState),
        feed: createFeedReducer(preloadedState),
        router: connectRouter(history),
    });
}
