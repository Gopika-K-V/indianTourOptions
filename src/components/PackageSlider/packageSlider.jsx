import React, { Fragment } from 'react'
import styles from "./packageSlider.module.scss";
import Animate from '../Animate/animate';
import assets from '../../assets/assets';

import 'swiper/css';
import 'swiper/css/grid';

import { A11y, Autoplay, Grid, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useGetDeviceType from '../../customHooks/useGetDeviceType';
import SliderCard from './SliderCard/sliderCard';

const PackageSlider = () => {
    const { isMobile } = useGetDeviceType();

    return (
        <Animate as='section' effect='fade-in' className={styles.package_slider}>
            <div className={`container`}>
                <h2 className={`title_main`}>Best Selling Packages</h2>
                {isMobile ?
                    <div className={`${styles.slider_wrapper_mob} d-sm-none`}>
                        {PACKAGES?.map((item) => {
                            return (
                                <div key={item} className={styles.slider_item}>
                                    <SliderCard
                                        link={item?.link}
                                        image={item?.image}
                                        title={item?.title}
                                        content={item?.content}
                                        price={item?.price}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div className={`${styles.slider_wrapper} d-none d-sm-block`}>
                        <Swiper
                            modules={[A11y, Autoplay, Mousewheel, Grid]}
                            spaceBetween={20}
                            slidesPerView={3}
                            loop={true}
                            freeMode={true}
                            speed={1000}
                            mousewheel={{
                                invert: true,
                            }}
                            // autoplay={{
                            //     delay: 50000,
                            //     disableOnInteraction: false,
                            // }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}

                            scrollbar={{ draggable: true }}
                        >
                            {PACKAGES?.map((item) => {

                                return (
                                    <SwiperSlide key={item.id}>
                                        <SliderCard
                                            link={item?.link}
                                            image={item?.image}
                                            title={item?.title}
                                            content={item?.content}
                                            price={item?.price}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>}
            </div>
        </Animate>
    )
}

export default PackageSlider

const PACKAGES = [
    {
        id: 1,
        image: assets.SpecificationImage,
        title: "Kerala Package",
        content: "Kochi | Munnar | Thekkady | Aleppy",
        link: "/",
        price: "Starting from Rs.20,000 "
    },
    {
        id: 2,
        image: assets.thumbImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 3,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 4,
        image: assets.aboutImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 5,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 6,
        image: assets.thumbImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 7,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 8,
        image: assets.aboutImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 9,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 10,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
]