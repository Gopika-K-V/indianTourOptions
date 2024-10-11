import React from 'react'
import styles from "./bannerCards.module.scss";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { specificationCards } from '../../PackageCards/packageCards';
import PackageCard from '../../PackageCard/packageCard';

const BannerCards = () => {
    return (
        <div className={styles.slider_wrap}>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                watchSlidesProgress={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 8,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 36,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 36,
                    },
                }}

                scrollbar={{ draggable: true }}
            >
                {specificationCards.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <PackageCard props={item} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default BannerCards
