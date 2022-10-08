import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import './CarForm.css'

const CarForm = () => {
    const {reset, register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({mode: "all"});

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.carReducer);

    useEffect(() => {
        if (carForUpdate) {
            setValue('id', carForUpdate.id);
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate?.id]);


    const submit = (car) => {
         carForUpdate ? dispatch(carActions.update(car)) : dispatch(carActions.create(car));
        reset();
    };


    return (
        <form onSubmit={handleSubmit(submit)} className={'carForm'} >

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

            <input type="text" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
            })}/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>

        </form>
    );
};

export {CarForm};