import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {createUserReducer} from './user';

export default (history, preloadedState) => {
    return combineReducers({
        user: createUserReducer(preloadedState),
        router: connectRouter(history),
    });
}
