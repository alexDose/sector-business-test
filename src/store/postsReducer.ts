import {PostProps, PostsProps} from "../types";
import {AppThunk} from "./store";
import {Dispatch} from "redux";
import {usersApi} from "../api/usersApi";

const initialState: PostsProps = {
    posts: [],
    allPosts: [],
    limit: 10,
    sorting: 'down'
};

export const postsReducer = (state = initialState, action: PostsActionType): any => {
    switch (action.type) {
        case 'GET-POSTS':
            return {
                ...state,
                posts: action.posts
            };

        case 'GET-ALL-POSTS':
            return {
                ...state,
                allPosts: action.allPosts
            };

        case 'SORTING-TABLE':
            let sortedPosts

            if (action.value === 'id') {
                sortedPosts = [...state.posts].sort((a, b) => state.sorting === 'down' ? b.id - a.id : a.id - b.id)
            }
            if (action.value === 'title') {
                sortedPosts = [...state.posts].sort((a, b) => state.sorting === 'down' ? b.title.localeCompare(a.title) : a.title.localeCompare(b.title))
            }
            if (action.value === 'body') {
                sortedPosts = [...state.posts].sort((a, b) => state.sorting === 'down' ? b.body.localeCompare(a.body) : a.body.localeCompare(b.body))
            }

            return {
                ...state,
                sorting: state.sorting === 'up' ? 'down' : 'up',
                posts: sortedPosts
            }

        default:
            return state
    }
}

export const getPostsAC = (posts: PostProps[]) => ({type: 'GET-POSTS', posts: posts} as const)
export const getAllPostsAC = (allPosts: PostProps[]) => ({type: 'GET-ALL-POSTS', allPosts: allPosts} as const)
export const sortTableAC = (value: string) => ({type: 'SORTING-TABLE', value} as const);

export const getPosts = (page: number): AppThunk => async (dispatch: Dispatch) => {
    try {
        let res = await usersApi.getPosts(page)
        dispatch(getPostsAC(res.data))
    } catch (e) {
        console.log("Нет данных")
    }
}

export const getAllPosts = (): AppThunk => async (dispatch: Dispatch) => {
    try {
        let res = await usersApi.getAllPosts()
        dispatch(getAllPostsAC(res.data))
    } catch (e) {
        console.log("Нет данных")
    }
}

export type PostsActionType = ReturnType<typeof getPostsAC>
    | ReturnType<typeof sortTableAC>
    | ReturnType<typeof getAllPostsAC>
