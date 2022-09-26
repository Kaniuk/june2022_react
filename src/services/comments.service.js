import {axiosService} from "./axios.service";
import {urls} from "../configs";

const commentsService = {
    getPostComments: (postId) => axiosService.get(urls.comments, {params: {postId}})
};

export {
    commentsService
};