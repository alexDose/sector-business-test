import {PostProps} from "../../../types";
import React from "react";
import styles from "./TableBody.module.scss"

interface Props {
    posts: PostProps[]
}

export const TableBody = ({posts}: Props) => {

    return (
        <tbody>
        {posts.map(({id, body, title}: PostProps) => (
            <tr key={id}>
                <td>
                    <div className={styles.container}>
                        {id}
                    </div>
                </td>
                <td>{title}</td>
                <td>{body}</td>
            </tr>
        ))}
        </tbody>
    )
}
