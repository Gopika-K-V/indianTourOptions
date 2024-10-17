import React from 'react'
import Assets from '../../assets/assets';
import styles from "./imageGrid.module.scss";

const ImageGrid = () => {
    const getClassName = (key) => {
        switch (key) {
            case 'tall':
                return styles.tall;
            case 'wide':
                return styles.wide;
            case 'big':
                return styles.big;
            default:
                return 'image-default';
        }
    };
    return (
        <section className={styles.image_grid}>
            <div className={`container-fluid`}>
                <div className={styles.masonry_grid}>
                    {items.map(item => {
                        const gridClasss = getClassName(item?.type);
                        return (
                            <div key={item.id} className={`${styles.masonry_item} ${gridClasss}`}>
                                {item?.image && <img src={item.image} alt={item.alt} className={styles.masonry_image} />}
                                {item?.title &&
                                    <div className={styles.masonry_text}>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ImageGrid;

const items = [
    {
        id: 1,
        title: "Honeymoon Adventure",
        description: "Explore new destinations with your partner.",
    },
    {
        id: 2,
        image: Assets.thumbImage,
        alt: "hiking"
    },
    {
        id: 2,
        image: Assets.thumbImage,
        alt: "hiking",
        type: "wide",
    },
    {
        id: 2,
        image: Assets.thumbImage,
        alt: "hiking"
    },
    {
        id: 1,
        image: Assets.miniBannerBridge,
        alt: "honeymoon",
        type: "tall",
    },
    {
        id: 2,
        image: Assets.thumbImage,
        alt: "hiking",
        type: "wide",
    },
    {
        id: 1,
        image: Assets.miniBannerBridge,
        alt: "honeymoon",
        type: "big",
    },
    {
        id: 1,
        title: "Honeymoon Adventure",
        description: "Explore new destinations with your partner.",
    },
    {
        id: 2,
        image: Assets.thumbImage,
        alt: "hiking"
    },
];

