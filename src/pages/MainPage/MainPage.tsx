import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {allPostsSelector, postsSelector} from "../../store/selectors";
import {getAllPosts, getPosts, sortTableAC} from "../../store/postsReducer";
import {SearchInput} from "../../components/SearchInput/SearchInput";
import {Table} from "../../components/Table";
import {Pagination} from "../../components/Pagination/Pagination";
import {getFilteredPosts} from "../../helpers/helpers";

const MainPage = () => {
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(1)

    const allPosts = useAppSelector(allPostsSelector);
    let posts = useAppSelector(postsSelector)
    const dispatch = useAppDispatch()

    const onSorting = (value: string) => {
        console.log(value)
        dispatch(sortTableAC(value))
    }

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    useEffect(() => {
        dispatch(getPosts(page))
    }, [page])

    return (
        <div className={styles.container}>
            <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Table
                posts={searchValue
                    ? getFilteredPosts(allPosts, searchValue)
                    : posts}
                onSorting={onSorting}
            />
            <Pagination currentPage={page} setPage={setPage}/>
        </div>
    );
};

export default MainPage;
