import React from 'react';

import {carService} from "../../services";
import './Car.css';

const Car = ({car, setCars, startEditCar}) => {
    const deleteCar = async () => {
        await carService.deleteById(car.id);
        setCars(cars => cars.filter(item => item.id !== car.id));
    };

    return (
        <div className={'car'}>
            <div>id : {car.id}</div>
            <div>model : {car.model}</div>
            <div>price : {car.price}</div>
            <div>year : {car.year}</div>
            <button onClick={deleteCar}>Delete</button>
            <button onClick={() => startEditCar(car.id)}>Update</button>
        </div>
    );
};

export default Car;