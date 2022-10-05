import React from 'react';

const Post = ({post}) => {
    return (
        <div className={'block'}>
            <div>1.title : {post.title}</div>
            <div>2.body : {post.body}</div>
        </div>
    );
};

export {Post};