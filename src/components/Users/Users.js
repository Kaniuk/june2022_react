import UserForm from "../UserForm/UserForm";
import React, {useEffect, useState} from 'react';

import {userService} from "../../services";
import User from "../User/User";
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(({data}) => setUsers(data));
    }, []);

    return (
        <div className={'usersBlock'}>
            {<UserForm setUsers={setUsers}/>}
            <hr/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;