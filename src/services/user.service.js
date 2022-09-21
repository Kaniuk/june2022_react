import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getAllUsers: () => axiosService.get(urls.users),
    createUser: (user) => axiosService.post(urls.users, user)
};

export {
    userService
};