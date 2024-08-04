import React from 'react'
import styles from "./footerComponent.module.scss";

const FooterComponent = () => {
    return (
        <footer className={styles.footer} id="#footer">
            {/* <div className={`${styles.main_footer} d-none d-lg-block`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <div className={styles.logo}>
                                <a className={styles.logo_wrap} href="#">
                                    <figure className={`${styles.logo_wrapper} ratio`}>
                                        <img src={Logo} alt="My tour travels" />
                                    </figure>
                                </a>
                            </div>
                            <div className={styles.address}>
                                <address>
                                    S 4, Part 2, Chandan Market, Greater Kailash,
                                    Delhi, Haryana
                                    678798
                                </address>
                                <a className={styles.address_links} href="tel:1234567890">+91 123456789</a>
                                <a className={styles.address_links} href="mailto:info@flyours.com">info@flytours.com</a>
                            </div>
                        </div>
                        <div className={`col-3`}>
                            <h4 className={styles.footer_list_title}>Footer list title</h4>
                            <ul className={styles.footer_list}>
                                <li className={styles.footer_list_item}>Item Item</li>
                                <li className={styles.footer_list_item}>Item Item</li>
                                <li className={styles.footer_list_item}>Item Item</li>
                                <li className={styles.footer_list_item}>Item Item</li>
                            </ul>
                        </div>
                        <div className={`col-3`}>
                            <h4 className={styles.footer_list_title}>Footer list title</h4>
                            <ul className={styles.footer_list}>
                                <li className={styles.footer_list_item}>Item Item</li>
                                <li className={styles.footer_list_item}>Item Item</li>
                                <li className={styles.footer_list_item}>Item Item</li>
                                <li className={styles.footer_list_item}>Item Item</li>
                            </ul>
                        </div>
                        <div className={`col-3`}>
                            <h4 className={styles.footer_list_title}>Connect with us</h4>
                            <div className={`${styles.top_nav_contact} ${styles.footer}`}>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={styles.copy_right}>
                <div className={`container`}>
                    <div className={styles.copy_right_wrapper}>
                        <p className={styles.copy_right_text}>© 2024 All Rights Reserved to Indian Tour Options</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
