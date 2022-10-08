import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../car/Car";
import './Cars.css';

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, loading, error} = useSelector(state => state.carReducer);

    useEffect(() => {
        dispatch(carActions.getAll());
    }, []);
    return (
        <div className={'Cars'}>
            {loading && <h2>Loading...</h2>}
            {error && <h2>error</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};