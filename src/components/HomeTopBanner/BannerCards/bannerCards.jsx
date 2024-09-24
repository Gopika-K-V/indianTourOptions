import React from 'react'
import styles from "./bannerCards.module.scss";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { specificationCards } from '../../PackageCards/packageCards';
import PackageCard from '../../PackageCard/packageCard';

const BannerCards = () => {
    return (
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                watchSlidesProgress={true}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }}

                scrollbar={{ draggable: true }}
            >
                {specificationCards.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <PackageCard props={item}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
    )
}

export default BannerCards
