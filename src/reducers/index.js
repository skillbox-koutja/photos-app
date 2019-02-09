import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import {createUserReducer} from './user';
import {createFeedReducer} from './feed';
import {createPhotoReducer} from './photo';

export default (history, preloadedState) => {
    return combineReducers({
        user: createUserReducer(preloadedState),
        feed: createFeedReducer(preloadedState),
        photo: createPhotoReducer(preloadedState),
        router: connectRouter(history),
    });
}
