import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services";
import './Carform.css';

const CarForm = ({setCars, editableCar, stopEditCar}) => {
    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({mode: "all"});

    useEffect(() => {
        if (editableCar) {
            setValue('model', editableCar.model);
            setValue('price', editableCar.price);
            setValue('year', editableCar.year);
        }
    }, [editableCar?.id]);


    const submitCar = async (car) => {
        if (editableCar) {
            const {data: updatedCar} = await carService.updateById(editableCar.id, car);
            setCars(cars => cars.map(car => updatedCar.id === car.id ? updatedCar : car));
            stopEditCar();
            reset();
        } else {
            const {data} = await carService.create(car);
            setCars(cars => [...cars, data]);
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(submitCar)} className={'carForm'}>
            <input type="text" placeholder={'model'} {...register('model', {
                required: true,
                minLength: {value: 2, message: 'Field model should contain more than two symbols'},
                maxLength: 30
            })}/>
            {errors.model && <span>{errors.model.message}</span>}

            <input type="text" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                required: true,
                min: {value: 100, message: 'The price should be bigger than 100'}
            })}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{editableCar ? 'Update' : 'Save'}</button>
        </form>
    );
};

export default CarForm;