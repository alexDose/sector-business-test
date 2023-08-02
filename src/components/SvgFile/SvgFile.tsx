import sprite from "../../assets/icon/sprite.svg";
import React from "react";
import styles from "./SvgFile.module.scss"

interface Props {
    svgId: string
    onClick?: any
    cursor?: boolean
    width: string
    height: string
}

export const SvgFile = ({svgId, onClick, cursor, width, height}: Props) => (
    <svg
        className={cursor ? styles.cursor: ''}
        onClick={onClick}
        width={width}
        height={height}
        fill="none"
    >
        <use xlinkHref={`${sprite}#${svgId}`}></use>
    </svg>
)

