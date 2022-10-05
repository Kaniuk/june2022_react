import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postsService} from "../../services";
import {GET_POSTS} from "../../reducers";
import {Post} from "../post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state.postsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: GET_POSTS, payload: data}));
    }, []);

    return (
        <div className={'content'}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};