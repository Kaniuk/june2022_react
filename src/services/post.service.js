import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getPostComment: (id) => axiosService(`${urls.posts}/${id}`)
};

export {
    postService
};