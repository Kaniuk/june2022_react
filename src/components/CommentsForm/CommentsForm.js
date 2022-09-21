import React from 'react';
import {useForm} from "react-hook-form";

import {commentsService} from "../../services";
import './CommentsForm.css';

const CommentsForm = ({setComments}) => {
    const {reset, formState: {errors, isValid}, handleSubmit, register} = useForm({mode: "all"});

    const commentSubmit = async (comment) => {
        const {data} = await commentsService.createComment(comment);
        setComments(comments => [...comments, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(commentSubmit)} className={'commentsForm'}>
            <input type="text" placeholder={'postId'} {...register('postId', {
                valueAsNumber: true, required: true
            })}/>
            {errors.postId && <span>{errors.postId.message}</span>}
            <input type="text" placeholder={'name'} {...register('name', {required: true})}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body', {
                required: true,
                minLength: {value: 2, message: 'Field should be longer'}
            })}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default CommentsForm;