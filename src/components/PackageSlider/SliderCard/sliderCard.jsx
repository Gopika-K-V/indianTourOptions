import React from 'react'
import styles from "./sliderCard.module.scss";
import { Link } from 'react-router-dom';

const SliderCard = (props) => {
    const {link,title,image,content,price } = props;
    return (
        <Link href={link} className={styles.package_card}>
            <figure className={`ratio mb-0`}>
                <img src={image} alt={title} />
            </figure>
            <div className={styles.content_section}>
                <h4 className={`${styles.title} mb-0`}>{title}</h4>
                <p className={`${styles.content} mb-0`}>{content}</p>
                <p className={`${styles.price} mb-0`}>{price}</p>
            </div>
        </Link>
    )
}

export default SliderCard
