import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {userReducer} from "./user";

export default (history) => combineReducers({
    user: userReducer,
    router: connectRouter(history),
});
