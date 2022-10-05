import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {usersService} from "../../services";
import {User} from "../user/User";
import {GET_USERS} from "../../reducers";

const Users = () => {
    const state = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        usersService.getAll().then(({data}) => dispatch({type: GET_USERS, payload: data}));
    }, []);

    return (
        <div className={'content'}>
            {state.users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};


export {Users};