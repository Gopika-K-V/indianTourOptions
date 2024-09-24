import React, { Fragment } from 'react';
import styles from "./headerComponent.module.scss";
import LogoWhite from "../../assets/Images/Logo-white.svg";
import LogoDark from "../../assets/Images/Logo-dark.svg";
import { Link } from 'react-router-dom';
import MegaMenu from "../MegaMenu";
import assets from '../../assets/assets';
import useGetDeviceType from '../../customHooks/useGetDeviceType';
import MobileMenuOffcanvas from '../MobileMenuOffcanvas/mobileMenuOffcanvas';
import useHeaderToFix from '../../customHooks/useHeaderToFix';

const HeaderComponent = () => {
    const { isMobile } = useGetDeviceType();
    const isHeaderFixed = useHeaderToFix(1);
    const visibleClass = isHeaderFixed ? styles.fixed : "";

    return (
        <header className={`${styles.main_header} ${visibleClass}`}>
            <div className={`container-fluid`}>

                <div className={styles.header_container}>
                    <div className={styles.logo}>
                        <Link className={styles.logo_wrap} to={"/"}>
                            <figure className={`${styles.logo_wrapper} ratio`}>
                                {isHeaderFixed ?
                                    <img src={LogoWhite} alt="Indian Tour Options" />
                                    :
                                    <img src={LogoDark} alt="Indian Tour Options" />
                                }
                            </figure>
                        </Link>
                    </div>
                    {isMobile &&
                        <div className={`${styles.menu_btn} d-sm-none`}>
                            <MobileMenuOffcanvas />
                        </div>
                    }
                    <div className={`${styles.header_right_wrap} d-none d-lg-flex`}>
                        <ul className={styles.nav_list}>
                            {navLinks.map((item) => {
                                return (
                                    <Fragment key={item.id}>
                                        <li className={styles.nav_list_item}>
                                            <Link className={styles.nav_link} to={item?.link}>
                                                <span>{item.linkText}</span>
                                            </Link>
                                            {/* {item?.megaMenu &&
                                                <div className={styles.mega_menu_wrapper}>
                                                    <ul>
                                                        {item?.megaMenu.map((item) => {
                                                            return (
                                                                <li>{item?.id}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            } */}
                                            {/* {item?.megaMenu &&
                                                <div className={styles.mega_menu_wrapper}>
                                                    <MegaMenu menuLinks={item?.megaMenu}/>
                                                </div>
                                            } */}
                                        </li>
                                    </Fragment>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={`${styles.mobile_nav} d-lg-none`}>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;

export const navLinks = [
    {
        id: 1,
        link: "/",
        linkText: "Destinations",
        megaMenu: [
            {
                id: 1,
                menuLink: "/",
                menuText: "asdasd",
                menuImage: assets.destinationImg,
            },
            {
                id: 2,
                menuLink: "/",
                menuText: "assssss",
                menuImage: assets.SpecificationImage,
            },
            {
                id: 3,
                menuLink: "/",
                menuText: "adddddddd",
                menuImage: assets.destinationImg,
            },
            {
                id: 4,
                menuLink: "/",
                menuText: "affffffffffff",
                menuImage: assets.SpecificationImage,
            },
        ]
    },
    {
        id: 2,
        link: "/",
        linkText: "Specifications",
    },
    {
        id: 3,
        link: "/",
        linkText: "Packages",
    },
    {
        id: 4,
        link: "/",
        linkText: "Calender",
    },
    {
        id: 5,
        link: "/contact-us",
        linkText: "Contact",
    },
]
