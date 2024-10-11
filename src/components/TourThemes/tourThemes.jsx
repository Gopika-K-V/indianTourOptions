import React from 'react'
import styles from "./tourThemes.module.scss";
import Animate from '../Animate/animate';
import ThemeCard from '../ThemeCard';
import Assets from '../../assets/assets';

const TourThemes = () => {
    return (
        <Animate as='section' effect='fade-in' className={styles.tour_themes_section}>
            <div className={`container`}>
                <h2 className={`title_main`}>Themes</h2>
                <div className={styles.themes_wrapper}>
                    <div className={`row`}>
                        {TOURTHEMES?.map((item) =>{
                            return(
                                <div className={`col-12 col-md-6`}>
                                    <ThemeCard {...item}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Animate>
    )
}

export default TourThemes

const TOURTHEMES = [
    {
        id: 1,
        theme: "Honeymoon",
        link: "/honeymoon",
        image: Assets.thumbImage,
        alt: "honeymoon-package",
        desc: "Enjoy a romantic getaway with our exclusive honeymoon packages, tailored for newlyweds.",
        price: "INR 3000/-"
    },
    {
        id: 2,
        theme: "Adventure",
        link: "/adventure",
        image: Assets.thumbImage,
        alt: "adventure-package",
        desc: "Get your adrenaline pumping with thrilling adventure packages including hiking, rafting, and more.",
        price: "INR 5000/-"
    },
    {
        id: 3,
        theme: "Beach Holiday",
        link: "/beach-holiday",
        image: Assets.thumbImage,
        alt: "beach-package",
        desc: "Relax by the shore with our serene beach holiday packages, perfect for unwinding.",
        price: "INR 4000/-"
    },
    {
        id: 4,
        theme: "Cultural Tour",
        link: "/cultural-tour",
        image: Assets.thumbImage,
        alt: "cultural-package",
        desc: "Explore the rich culture and history of various destinations with our cultural tour packages.",
        price: "INR 3500/-"
    },
    {
        id: 5,
        theme: "Wildlife Safari",
        link: "/wildlife-safari",
        image: Assets.thumbImage,
        alt: "wildlife-package",
        desc: "Get close to nature with our wildlife safari packages, perfect for animal lovers and nature enthusiasts.",
        price: "INR 4500/-"
    },
    {
        id: 6,
        theme: "Luxury Escapes",
        link: "/luxury-escapes",
        image: Assets.thumbImage,
        alt: "luxury-package",
        desc: "Indulge in a luxurious experience with our premium luxury escape packages, offering top-tier services.",
        price: "INR 10000/-"
    }
];
