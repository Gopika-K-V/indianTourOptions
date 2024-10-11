import React from 'react';
import styles from "./destinationSection.module.scss";
import Assets from "../../assets/assets";
import { Link } from 'react-router-dom';
import Animate from '../Animate/animate';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const DestinationSection = () => {
  return (
    <Animate as='section' effect='fade-in'  className={styles.destinations_section} id="destinations">
        <div className="container">
            <h2 className={`title_main`}>Special Tours</h2>
            <h6 className={`sub_title`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
            <div className={styles.destinations_wrapper}>
                <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                watchSlidesProgress={true}
                navigation={{
                    clickable: true,
                }}
                speed={1000}
                freeMode= {true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
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
                    spaceBetween: 40,
                  },
                }}>
                    {destinations.map((item) => {
                        return(
                            <SwiperSlide key={item.id}>
                                <Link to={item?.link} className={styles.destination_item}>
                                    <div className={styles.img_wrapper}>
                                        <figure className={`ratio`}>
                                            <img src={item.image} alt={item.alt}/>
                                        </figure>
                                    </div>
                                    <div className={styles.destination_content}>
                                        <p className={styles.destination_title}>{item.destination_title}</p>
                                        {/* <p className={styles.destination_desc}>{item.destination_desc}</p> */}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </Animate>
  );
};

export default DestinationSection;


const destinations =[
    {
        id: 1,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "January",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        link: "/kochi",
        image: Assets.destinationImg,
        alt: "destination_img",
        destination_title: "February",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "March",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "April",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 1,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "May",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        link: "/kochi",
        image: Assets.destinationImg,
        alt: "destination_img",
        destination_title: "June",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "July",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "August",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 1,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "September",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        link: "/kochi",
        image: Assets.destinationImg,
        alt: "destination_img",
        destination_title: "October",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "November",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 4,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "December",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]