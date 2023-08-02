import styles from "./Title.module.scss";
import {SvgFile} from "../../../SvgFile/SvgFile";
import React from "react";
import {TitleProps} from "../../../../types";

export const Title = ({name, onClick, width}: TitleProps) => {
    const noPadding = name === 'ID' ? styles.noPadding : ''

    return (
        <th style={{width: width}}>
            <div onClick={onClick} className={`${styles.title} ${noPadding}`}>
                <span>{name}</span>
                <SvgFile
                    svgId='arrowDown'
                    cursor
                    width='12'
                    height='7'
                />
            </div>
        </th>
    )
}
