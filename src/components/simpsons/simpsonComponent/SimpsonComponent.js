import React from 'react';

import './SimpsonComponent.css'

function SimpsonComponent(props) {
    let {name, img} = props;
    return (
        <div className={'simpson'}>
            <h1>{name}</h1>
            <img src={img} alt=""/>
        </div>
    );
}

export default SimpsonComponent;