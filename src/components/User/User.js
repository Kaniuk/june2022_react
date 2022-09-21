import React from 'react';

import './User.css';

const User = ({user}) => {
    return (
        <div className={'user'}>
            <div>1.name - {user.name}</div>
            <div>2.username - {user.username}</div>
            <div>3.email - {user.email}</div>
        </div>
    );
};

export default User;