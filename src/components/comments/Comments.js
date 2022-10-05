import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentsService} from "../../services";
import {GET_COMMENTS} from "../../reducers";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const {comments} = useSelector(state => state.commentsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: GET_COMMENTS, payload: data}));
    }, []);

    return (
        <div className={'content'}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};