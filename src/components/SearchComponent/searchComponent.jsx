import React, { useState } from 'react';
import styles from "./searchComponent.module.scss";
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';

const SearchComponent = ({ data }) => {
    const [query, setQuery] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        if (isActive) {
            setQuery('');  // Clear the input when collapsing the search bar
        }
        setIsActive(!isActive);
    };

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div className={`${styles.search_component} ${isActive ? styles.expand : ""}`}>
            <button className={styles.search_btn} onClick={handleToggle}>
                <img src={assets.searchIcon} alt={"search icon"}/>
            </button>
            <input
                type="text"
                placeholder="Search your package"
                onChange={handleSearch}
                value={query}
            />
            {query && filteredData.length > 0 && isActive && (
                <>
                <ul className={styles.search_list}>
                    {filteredData.map(item => (
                        <li key={item.id} className={styles.search_list_item}>
                            <Link href={item?.link} className={styles.search_list_item_link}>
                                <figure className={`ratio`}>
                                    <img src={item.image} alt={item.title} />
                                </figure>
                                <p className={`${styles.title} mb-0`}>{item.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.search_overlay} onClick={handleToggle}></div>
                </>
            )}

            {query && filteredData.length === 0 && (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchComponent;
