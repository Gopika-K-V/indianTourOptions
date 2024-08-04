import React from 'react'
import styles from "./aboutUs..module.scss";

const AboutUs = () => {
    return (

        <section className={styles.about_us} id="aboutUs">
            <div className={`container`}>
                <h2 className={`title_main text-white`}>About US</h2>
                <div className={styles.content_wrapper}>
                    <div className={`row align-items-center`}>
                        <div className={`col-12 col-lg-6`}>
                            <div className={styles.content_section}>
                                <h4 className={`title_lg text-white`}>Lorem ipsum</h4>
                                <p className={`sub_content text-white`}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className={`col-12 col-lg-6`}>
                            <div className={styles.img_wrapper}>
                                <figure className={`ratio`}>
                                    <img src="./assets/banner_img.jpg" alt="about us img" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
