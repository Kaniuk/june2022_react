import {GET_POSTS} from "./actions";

const postsReducer = (state = {posts: []}, action) => {
    switch (action.type) {
        case GET_POSTS :
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};
export {
    postsReducer
};