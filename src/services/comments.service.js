import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getAllComments: () => axiosService.get(urls.comments),
    createComment: (comment) => axiosService.post(urls.comments, comment)
};

export {
    commentsService
};