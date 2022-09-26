import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {postService} from "../../services";
import './Post.css';

const Post = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [post, SetPost] = useState({});

    useEffect(() => {
        postService.getPostComment(id).then(({data}) => SetPost(data));
    }, [id]);

    return (
        <>
            <div>
                {id && <button onClick={() => navigate(-1)}>Back</button>}
            </div>
            <div className={'post'}>
                <h3>Id - {post.id}</h3>
                <h2>Title - {post.title}</h2>
                <p>Body - {post.body}</p>
            </div>
        </>
    );
};

export {Post};