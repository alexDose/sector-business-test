import React from "react";
import {useAppSelector} from "../../store/store";
import styles from './Pagination.module.scss'
import {allPostsSelector, limitSelector} from "../../store/selectors";
import {getPages} from "../../helpers/helpers";

interface PaginationProps {
    currentPage: number
    setPage: (value: number) => void
}

export const Pagination = ({currentPage, setPage}: PaginationProps) => {
    const allPosts = useAppSelector(allPostsSelector)
    const limit = useAppSelector(limitSelector)
    const pages = [...Array(getPages(allPosts, limit))]

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setPage(currentPage - 1)
        }
    };

    const handleNextPage = () => {
        if (currentPage < limit) {
            setPage(currentPage + 1)
        }
    };

    const handlePageChange = (currentPage: number) => {
        setPage(currentPage)
    };

    return (
        <div className={styles.paginationWrapper}>
            <div className={styles.pagination}>
                <div>
                    <button
                        className={`${currentPage === 1 && styles.disabled}`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        Назад
                    </button>
                </div>
                <div>
                    {pages.length && pages.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.list} ${currentPage === (index + 1)
                            && styles.active}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </span>
                    ))}
                </div>
                <div>
                    <button
                        className={`${currentPage === limit && styles.disabled}`}
                        onClick={handleNextPage}
                        disabled={currentPage === limit}
                    >
                        Далее
                    </button>
                </div>
            </div>
        </div>
    );
};
