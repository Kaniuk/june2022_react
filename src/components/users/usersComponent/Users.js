import React, {useEffect, useState} from 'react';

import {getUsers} from "../../../services/user.api.axios";
import User from "../UserComponent/User";
import './Users.css';
import UserDetails from "../userDetailsComponent/UserDetails";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [currentUser, setCurrentCurrentUser] = useState(null);

    let setAsCurrentUser = (userDetails) => {
        setCurrentCurrentUser(userDetails);
    };

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);


    return (
        <div>
            <div className={'users'}>
                {users.map(item => (
                    <User key={item.id} user={item}
                          isSelected={currentUser?.id === item.id}
                          setAsCurrentUser={setAsCurrentUser}/>
                ))}
            </div>
            <div className={'userDetails'}>
                {currentUser &&
                    <UserDetails key={currentUser.id} userDetails={currentUser}/>
                }
            </div>

        </div>
    );
};

export default Users;