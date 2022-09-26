import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";
import './Comments.css';

const Comments = () => {
    const {postId} = useParams();
    const navigate = useNavigate();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getPostComments(postId).then(({data}) => setComments(data));
    }, [postId]);

    return (
        <div className={'comments-button'}>
            <div>
                {postId && <button onClick={() => navigate(-1)}>Back</button>}
            </div>
            <div className={'comments'}>{comments.map(comment => (
                <Comment key={comment.id} comment={comment} needShowLinkToPostComments={!postId}/>)
            )}
            </div>

        </div>
    );
};

export default Comments;