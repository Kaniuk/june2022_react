import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../post/Post";
import {postActions} from "../../redux";

const Posts = () => {
    const dispatch = useDispatch();
    const {posts, postFromAPI, loading, error} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAll());
    }, []);
    return (
        <div>
            {postFromAPI && postFromAPI.body}
            <hr/>
            {loading && <h2>Loading...</h2>}
            {error && <h2>error</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};