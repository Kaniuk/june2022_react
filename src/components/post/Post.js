import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {
    const {id,title,body} = post

    const dispatch = useDispatch();

    return (
        <div>
            <div>TITLE:{title}</div>
            <div>BODY:{body}</div>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>SELECT</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>getFromAPI</button>
            <button onClick={() => dispatch(postActions.deleteById(id))}>DELETE</button>
        </div>
    );
};

export {Post};