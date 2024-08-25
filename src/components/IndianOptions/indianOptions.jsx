import styles from "./indianOptions.module.scss";
import assets from '../../assets/assets';
import { Link } from "react-router-dom";
import Animate from "../Animate/animate";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const IndianOptions = () => {
    return (
        <Animate as="section" effect='fade-in' className={styles.grid_section}>
            <div className={`container-fluid`}>
                <h2 className={`title_main`}>We Offer</h2>
                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    speed={18000}
                    mousewheel={{
                        invert: true,
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    freeMode= {true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                    }}
                >
                    <>
                        {[...Array(5)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.parent_grid}>
                                    {specificationCards.map((item) => {
                                        return (
                                            <Link to={item?.link} className={styles.image_grid} key={item?.id}>
                                                <figure className={`${styles.image_wrapper} ratio`}>
                                                    <img src={item?.image} alt={item?.title} />
                                                </figure>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </SwiperSlide>
                        ))}
                    </>
                </Swiper>

            </div>
        </Animate>
    )
}




export default IndianOptions;

const specificationCards = [
    {
        id: 1,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
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
    // {
    //     id: 6,
    //     image: assets.thumbImage,
    //     title: "Cycle Tours",
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    //     link: "/",
    // },
    // {
    //     id: 7,
    //     image: assets.SpecificationImage,
    //     title: "Cycle Tours",
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    //     link: "/",
    // },
    // {
    //     id: 8,
    //     image: assets.aboutImage,
    //     title: "Cycle Tours",
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    //     link: "/",
    // },
    // {
    //     id: 9,
    //     image: assets.SpecificationImage,
    //     title: "Cycle Tours",
    //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    //     link: "/",
    // },
]
