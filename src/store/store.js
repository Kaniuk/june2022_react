import {combineReducers, legacy_createStore as createStore} from 'redux';
import {commentsReducer, postsReducer, usersReducer} from "../reducers";


let reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer: commentsReducer

});

let store = createStore(reducer);

export {
    store
};