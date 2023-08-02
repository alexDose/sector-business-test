import {RootState} from "./store";
import {PostProps} from "../types";

export const postsSelector = (state: RootState): PostProps[] => state.posts.posts;
export const allPostsSelector = (state: RootState): PostProps[] => state.posts.allPosts;
export const limitSelector = (state: RootState) => state.posts.limit;
