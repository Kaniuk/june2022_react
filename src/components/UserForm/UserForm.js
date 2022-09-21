import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services";
import './UserForm.css';

const UserForm = ({setUsers}) => {
    const {reset, formState: {errors, isValid}, handleSubmit, register} = useForm({mode: "all"});

    const submit = async (user) => {
        const {data} = await userService.createUser(user);
        setUsers(users => [...users, data]);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(submit)} className={'usersForm'}>
            <input type="text" placeholder={'name'} {...register('name', {
                required: true,
                minLength: {value: 2, message: 'You should type more than 2 char.'},
                maxLength: {value: 100, message: 'Wow it is too much for name'}
            })}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username', {required: true})}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default UserForm;