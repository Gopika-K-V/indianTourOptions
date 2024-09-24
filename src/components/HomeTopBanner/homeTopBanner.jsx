import React from 'react'
import styles from "./homeTopBanner.module.scss";
import assets from '../../assets/assets';
import BannerCards from './BannerCards/bannerCards';
import HomeSearch from '../HomeSearch/homeSearch';

const HomeTopBanner = () => {
    return (
        <div className={styles.top_banner}>
            <div className={`container-fluid`}>
            <div className={`row justify-content-md-center`}>
                <div className={`col-12 col-md-6 col-lg-5`}>
                    <div className={styles.content_section}>
                        <h1 className={`${styles.title} mb-0`}>
                            Discover the best destinations
                        </h1>
                        <h4 className={`${styles.sub_title} mb-0`}>
                            Discover with Indian Tour Options. Get the best service with us
                        </h4>
                        <HomeSearch/>
                    </div>
                </div>
                <div className={`col-12 col-md-6 col-lg-7`}>
                    <div className={styles.img_section}>
                        <figure className={`ratio`}>
                            <img src={assets.topBanner} alt={"top-banner"} />
                        </figure>
                    </div>
                </div>
                <div className={`col-12 col-md-8 col-lg-7`}>
                    <div className={styles.banner_cards}>
                    <BannerCards/>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeTopBanner
