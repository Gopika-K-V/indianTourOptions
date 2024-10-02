import React from 'react';
import styles from "./imageWithText.module.scss";
import Animate from '../Animate/animate';
import assets from '../../assets/assets';
import HomeBanner from '../HomeBanner/homeBanner';


const ImageWithText = () => {
    return (
        <div className={`position-relative`}>
            <HomeBanner />
            <Animate as='section' effect='fade-in' className={styles.img_with_text} id="specifications">
                <div className={`container-fluid`}>
                    <div className={`row justify-content-center`}>
                        <div className={`col-12 col-md-6 col-lg-5`}>
                            <div className={styles.img_wrapper}>
                                <figure className={`ratio`}>
                                    <img src={assets.aboutImage} alt="img_with_text" />
                                </figure>
                            </div>
                        </div>
                        <div className={`col-12 col-md-6 col-lg-5`}>
                            <div className={styles.content_section}>
                                <h4 className={`title_lg`}>A ticket to the uniqueness </h4>
                                <p className={`sub_content`}>We, Indian Tour Options, specialize in crafting exclusive tour packages and unique experiences across South India. Realizing the depth of this rich cultural heritage and diverse landscapes, we offer a host of personalized itineraries that bring into view the most unique features like serene backwaters, ancient temples, vibrant festivals, and authentic local cuisine. Our highly professional team works towards offering outstanding service and unforgettable moments, making sure that each journey with us uncovers the hidden treasures and cultural beauty of South India. Explore the essence of this enchanting region with a tailored adventure that will exceed expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Animate>
        </div>
    )
}

export default ImageWithText
