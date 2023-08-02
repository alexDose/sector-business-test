import {PostProps} from "../types";

export const getFilteredPosts = (posts: PostProps[], searchValue: string) => {
    return posts.filter(post => post.title.toUpperCase().includes(searchValue.toUpperCase()) || post.body.toUpperCase().includes(searchValue.toUpperCase()) || post.id.toString().includes(searchValue))
}

export const getPages = (posts: PostProps[], limit: number): number => {
    return Math.ceil(posts.length / limit)
}
