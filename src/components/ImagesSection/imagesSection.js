import React from 'react';
import styles from './imagesSection.module.scss';

const ImagesSection = () => {
  return (
    <section className={styles.images_section} id="images">
            <div className={`container`}>
                <h2 className={`title_main`}>Images</h2>
                <h6 className={`sub_title`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                <div className="swiper image_slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="img_item">
                                <figure className="ratio">
                                    <img src="./assets/logo.png" alt="imges"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default ImagesSection
