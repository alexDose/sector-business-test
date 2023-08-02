import React from 'react';
import styles from './SearchInput.module.scss';
import {SvgFile} from "../SvgFile/SvgFile";

interface Props {
    searchValue: string
    setSearchValue: (value: string) => void
}

export const SearchInput = ({searchValue, setSearchValue}: Props) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const clearInputValue = () => {
        setSearchValue('')
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                value={searchValue}
                onChange={handleInputChange}
                onBlur={clearInputValue}
                type='text'
                placeholder="Поиск"
            />
            <SvgFile
                svgId="loupe"
                width='24px'
                height='24px'
            />
        </div>
    );
};

