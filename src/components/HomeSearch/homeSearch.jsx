import React from 'react'
import styles from "./homeSearch.module.scss";
import SearchComponent from '../SearchComponent/searchComponent';
import { specificationCards } from '../PackageCards/packageCards';

const HomeSearch = () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
    return (
        <div className={styles.home_search_container}>
            <SearchComponent data={specificationCards}/>
        </div>
    )
}

export default HomeSearch
