import React from 'react';

import './Comment.css';

const Comment = ({comment}) => {
    return (
        <div className={'comment'}>
            <div>postId : {comment.postId}</div>
            <div>id: {comment.id}</div>
            <div>name : {comment.name}</div>
            <div>email:{comment.email}</div>
            <div>body : {comment.body}</div>
        </div>
    );
};

export default Comment;