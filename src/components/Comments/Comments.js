import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services";
import CommentsForm from "../CommentsForm/CommentsForm";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAllComments().then(({data}) => setComments(data));
    }, []);
    return (
        <div>
            {<CommentsForm setComments={setComments}/>}
            <hr/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;