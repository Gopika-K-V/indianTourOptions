import React from 'react'
import styles from "./packageCard.module.scss";
import { Link } from 'react-router-dom';

const PackageCard = ({props}) => {
    
    return (
        <Link to={props?.link} className={styles.package_card}>
            <figure className={`${styles.img_wrapper} ratio`}>
                <img src={props?.image} alt={props?.title}/>
            </figure>
            <div className={styles.content_wrapper}>
                <p className={`${styles.content_text} text-center`}>{props?.title}</p>
                <p className={`${styles.content_sub_text} mb-0 text-center`}>{props?.content}</p>
            </div>
        </Link>
    )
}

export default PackageCard
