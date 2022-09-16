import React from 'react';

const UserDetails = ({userDetails}) => {
    return (
        <div>
            <h2>Name:{userDetails.name}</h2>
            <p>UserName:{userDetails.username}</p>
            <p>Email:{userDetails.email}</p>
            <p>address:</p>
            <p>Street:{userDetails.address.street}</p>
            <p>Suite:{userDetails.address.suite}</p>
            <p>City:{userDetails.address.city}</p>
            <p>Zipcode:{userDetails.address.zipcode}</p>
        </div>
    );
};

export default UserDetails;