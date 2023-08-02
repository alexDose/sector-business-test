import {instance} from "./instanse/instanse";

export const usersApi = {
    getPosts: (page = 1, limit = 10) => {
        return instance.get(`/posts?_page=${page}&_limit=${limit}`)
    },
    getAllPosts: () => {
        return instance.get(`/posts`)
    }
}
