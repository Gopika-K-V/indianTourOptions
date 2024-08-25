import React from 'react';
import styles from './videoSection.module.scss';
import Animate from '../Animate/animate';
import assets from '../../assets/assets';

const VideoSection = () => {
  return (
    <Animate as='section' effect='fade-in' className={styles.video_section} id="featuredVideo">
        <div className={`container`}>
            <h2 className={`title_main`}>Featured Video</h2>
            <div className={styles.video_container}>
                <span className={styles.addon_img}>
                    <img src={assets.dotImage} alt="addon-img"/>
                </span>
                <video width="100%" controls autoplay>
                    <source src={assets.BannerVideo} type="video/mp4"/>
                    {/* <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg"/> */}
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
    </Animate>

  )
}

export default VideoSection
