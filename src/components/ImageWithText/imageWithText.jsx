import React from 'react';
import styles from "./imageWithText.module.scss";
import Animate from '../Animate/animate';
import assets from '../../assets/assets';


const ImageWithText = () => {
    return (
        <Animate as='section' effect='fade-in' className={styles.img_with_text} id="specifications">
            <div className={`container-fluid`}>
                <div className={`row align-items-center`}>
                    <div className={`col-12 col-md-6`}>
                        <div className={styles.img_wrapper}>
                            <figure className={`ratio`}>
                                <img src={assets.aboutImage} alt="img_with_text" />
                            </figure>
                        </div>
                    </div>
                    <div className={`col-12 col-md-6`}>
                        <div className={styles.content_section}>
                            <h4 className={`title_lg`}>Lorem ipsum</h4>
                            <p className={`sub_content`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                            <p className={`sub_content`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Animate>
    )
}

export default ImageWithText
