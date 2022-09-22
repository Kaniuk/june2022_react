import {axiosServices} from "./axios.services";

import {urls} from "../configs";

const carService = {
    getAll: () => axiosServices.get(urls.cars),
    create: (car) => axiosServices.post(urls.cars, car),
    getById: (id) => axiosServices.get(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosServices.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`),
};

export {
    carService
};