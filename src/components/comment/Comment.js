import React from 'react';
import {Link} from "react-router-dom";

import './Comment.css';

const Comment = ({comment, needShowLinkToPostComments}) => {
    return (
        <div className={'comment'}>
            <h3>postId - {comment.postId}</h3>
            <p>id - {comment.name}</p>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
            {needShowLinkToPostComments && (
                <Link to={`${comment.postId}/posts`}>Show post comments</Link>
            )}
            <Link to={`/posts/${comment.postId}`}>Show post</Link>
        </div>
    );
};

export {Comment};