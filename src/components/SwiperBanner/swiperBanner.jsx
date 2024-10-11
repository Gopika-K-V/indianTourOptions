import React from 'react'
import styles from "./swiperBanner.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import assets from '../../assets/assets';


const SwiperBanner = () => {
    return (
        <div className={styles.swiper_banner}>
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-12 col-lg-6`}>

                    </div>
                    <div className={`col-12 col-lg-6`}>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            centeredSlides={true}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.2,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}

                            scrollbar={{ draggable: true }}
                        >
                            {[...Array(5)].map((_, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.slide_card}>
                                        <figure className={`ratio`}>
                                            <img src={assets.walkMob} alt="Travel in Paris" />
                                        </figure>
                                        <div className={styles.slide_content}>
                                            <h2>Travel in Paris</h2>
                                            <p>Lorem ipsum dolor sit amet...</p>
                                            <button>Read More</button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwiperBanner
