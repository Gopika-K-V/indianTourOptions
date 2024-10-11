import React from 'react'
import styles from "./themeCard.module.scss";

const ThemeCard = (props) => {
    return (
        <div className={styles.theme_card}>
            <div className={styles.image_section}>
                <figure className={`ratio`}>
                    <img src={props?.image} alt={props?.alt}/>
                </figure>
            </div>
            <div className={styles.content_section}>
                <h4 className={`${styles.theme_name} mb-0`}>{props?.theme}</h4>
                <p className={`${styles.theme_desc} mb-0`}>{props?.desc}</p>
                <p className={`${styles.theme_price} mb-0`}>{props?.price}</p>
            </div>
        </div>
    )
}

export default ThemeCard
