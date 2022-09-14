import React from 'react';

import './SingleCharacter.css';

const SingleCharacter = (props) => {
    let {item} = props;
    return (
        <div className={'character'}>
            <div>id : {item.id}</div>
            <h2>Name: {item.name}</h2>
            <div>status: {item.status}</div>
            <div>species: {item.species}</div>
            <div>gender: {item.gender}</div>
            <img src={item.image} alt=""/>
        </div>
    );
};

export default SingleCharacter;