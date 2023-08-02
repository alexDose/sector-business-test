import styles from "./TableHead.module.scss";
import React from "react";
import {Title} from "./Title/Title";

interface Props {
    onSorting: (value: string) => void
}

export const TableHead = ({onSorting}: Props) => {
    return (
        <thead className={styles.thead}>
        <tr>
            <Title width={'15%'} onClick={() => onSorting('id')} name='ID'/>
            <Title width={'45%'} onClick={() => onSorting('title')} name='Заголовок'/>
            <Title width={'40%'} onClick={() => onSorting('body')} name='Описание'/>
        </tr>
        </thead>
    )
}
