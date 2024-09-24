import React, { useState } from 'react';
import styles from "./searchComponent.module.scss";
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';

const SearchComponent = ({ data }) => {
    const [query, setQuery] = useState("");

    // Handle search input and update the query state
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    // Filter data based on the search query
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className={styles.search_component}>
            <img src={assets.searchIcon} alt={"search icon"}/>
            <input
                type="text"
                placeholder="Search your package"
                onChange={handleSearch}
                value={query}
            />

            {/* Show the list only if there is a search query and filtered results */}
            {query && filteredData.length > 0 && (
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
            )}

            {/* Show a message if no results are found and there's a search query */}
            {query && filteredData.length === 0 && (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchComponent;
