import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const dispatch = useDispatch();

    const {id, name, email} = user;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>SELECT</button>
            <button onClick={() => dispatch(userActions.getById({id}))}>getFromAPI</button>
            <button onClick={() => dispatch(userActions.deleteById(id))}>DELETE</button>
        </div>
    );
};

export {User};