import React from 'react';
import {TableHead} from "../TableHead/TableHead";
import {TableBody} from "../TableBody/TableBody";
import "./Table.module.scss"
import {PostProps} from "../../../types";

interface Props {
    posts: PostProps[]
    onSorting: (value: string) => void
}

export const Table = ({posts, onSorting}: Props) => {

    return (
            <table>
                <TableHead onSorting={onSorting}/>
                <TableBody posts={posts}/>
            </table>
    );
};


