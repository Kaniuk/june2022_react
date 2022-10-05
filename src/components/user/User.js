import React from 'react';

const User = ({user}) => {
    return (
        <div className={'block'}>
            <h3>name:{user.name}</h3>
            <div>username:{user.username}</div>
            <div>email:{user.email}</div>
        </div>
    );
};

export {User};