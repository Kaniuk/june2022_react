import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [editableCarId, setEditableCarId] = useState();

    const startEditCar = (carId) => {
        setEditableCarId(carId);
    };

    const stopEditCar = () => {
        setEditableCarId(undefined);
    };

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, []);

    const editableCar = cars.find(car => car.id === editableCarId);
    return (
        <div className={'cars'}>
            <CarForm setCars={setCars} editableCar={editableCar} stopEditCar={stopEditCar}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} startEditCar={startEditCar}/>)}
        </div>
    );
};

export default Cars;