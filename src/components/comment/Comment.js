import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className={'block'}>
            <div>1.email: {comment.email}</div>
            <div>2.body: {comment.body}</div>
        </div>
    );
};

export {Comment};