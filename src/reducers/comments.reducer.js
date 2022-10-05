import {GET_COMMENTS} from "./actions";

const commentsReducer = (state = {comments: []}, action) => {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }
};
export {
    commentsReducer
};