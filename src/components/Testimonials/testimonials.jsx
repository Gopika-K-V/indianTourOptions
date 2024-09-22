import React from 'react'
import styles from "./testimonials.module.scss";

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import Animate from '../Animate/animate';

const Testimonials = () => {
  return (
    <Animate as='section' effect='fade-in' className={styles.testimonial_section}>
      <div className={`container`}>
        <h2 className={`title_main`}>What Our Client's Say About Us</h2>
        <div className={styles.testimonial_wrapper}>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            watchSlidesProgress={true}
            pagination={{
              clickable: true,
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
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            
            scrollbar={{ draggable: true }}
          >
            {TESTIMONIALS.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className={styles.testimonial_item}>
                    <h4 className={styles.testimonial_content}>{item.content}</h4>
                    <div className={styles.testimonial_author}>
                      <h5 className={styles.testimonial_author_name}>{item?.author}</h5>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </Animate>
  )
}

export default Testimonials;

const TESTIMONIALS = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    author: "Arjun Ashok",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    author: "Arjun Ashok"
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    author: "Arjun Ashok"
  },
  {
    id: 4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    author: "Arjun Ashok"
  },
  {
    id: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    author: "Arjun Ashok"
  },
]