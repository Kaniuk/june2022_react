import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    loading: false,
    error: null,
    carForUpdate: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async (car, {rejectWithValue}) => {
        try {
            debugger
            const {data} = await carService.create(car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);
const update = createAsyncThunk(
    'carSlice/update',
    async (car, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(car.id, car);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);
const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate(state, action) {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.loading = false;

            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(update.fulfilled, (state, action) => {
                const updatedCar = action.payload;
                state.cars = state.cars.map(car => updatedCar.id === car.id ? updatedCar : car);
                state.carForUpdate = null;
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                const filtered = state.cars.filter((car) => car.id !== action.payload);
                state.cars = filtered;
            })


});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    update
};

export {
    carReducer,
    carActions
};