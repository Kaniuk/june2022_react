import React from 'react';

import './User.css';

const User = ({user, setAsCurrentUser, isSelected}) => {
    const clickHandler = () => {
        setAsCurrentUser(isSelected ? null : user);
    };

    return (
        <div className="user">
            <h2>Name:{user.name}</h2>
            <p>Email:{user.email}</p>
            <button onClick={clickHandler}>
                {isSelected ? 'Hide' : 'Show details'}
            </button>
        </div>
    );
};

export default User;