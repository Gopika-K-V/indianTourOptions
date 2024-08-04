import React from 'react'
import styles from "./homeBanner.module.scss";
import Animate from '../Animate/animate';
import assets from '../../assets/assets';

const HomeBanner = () => {
  return (
    <Animate as='section' effect='fade-in' className={styles.home_banner}>
        <div className={styles.img_section}>
            <figure className={`ratio`}>
                <img src={assets.BanneImg2} alt="banner_img"/>
            </figure>
        </div>
        <div className={styles.content_section}>
            <div className={`container`}>
                <h1 className={styles.main_title}>
                    INDIAN TOUR OPTIONS
                </h1>
                <h6 className={styles.banner_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt</h6>
            </div>
        </div>
    </Animate>
  )
}

export default HomeBanner
