import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import './Car.css';

const Car = ({car}) => {
    const {id, price, year, model} = car;

    const dispatch = useDispatch();
    return (
        <div className={'car'}>
            <div> model - {model}</div>
            <div> year - {year}</div>
            <div> price - {price}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>Delete</button>
        </div>
    );
};

export {Car};