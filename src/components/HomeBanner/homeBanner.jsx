import React from 'react'
import styles from "./homeBanner.module.scss";
import Animate from '../Animate/animate';
import assets from '../../assets/assets';

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const HomeBanner = () => {
    return (
        <section className={styles.home_banner}>
            <div className={`container`}>
                <Swiper
                    modules={[Autoplay]}
                    speed={3000}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {SCROLLBANNER.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <div className={styles.img_section}>
                                    <figure className={`ratio`}>
                                        <img src={item?.image} alt="banner_img" />
                                    </figure>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </section>
    )
}

export default HomeBanner;

const SCROLLBANNER = [
    {
        id: 1,
        image: assets.miniBannerTheyyam,
    },
    {
        id: 2,
        image: assets.miniBannerFood,
    },
    {
        id: 3,
        image: assets.miniBannerBoat,
    },
    {
        id: 4,
        image: assets.miniBannerBridge,
    },
]
