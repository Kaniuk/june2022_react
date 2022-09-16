import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers = () => {
    return axiosInstance.get();
};

const getUser = (id) => {
    return axiosInstance('/' + id);
};

export {getUsers, getUser};