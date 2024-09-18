import React from 'react';
import styles from "./fixedButtons.module.scss";
import Iconmoon from '../Icomoon/icoMoon';
import { Link } from 'react-router-dom';
import useGetDeviceType from '../../customHooks/useGetDeviceType';

const FixedButtons = () => {
  const {isMobile} = useGetDeviceType();
  return (
    <div className={`${styles.fixed_part} d-none d-sm-flex`}>
        <div className={styles.button_wrapper}>
          {SOCIAL_ICONS.map((item) =>{
            return(
              <Link key={item.id} to={item.link} className={`btn ${styles.icon_btn}`} target="_blank">
                <span>{item.text}</span>
                <Iconmoon icon={item.icon} color={"#FFF"} size={24} />
              </Link>
              )
            })}
        </div>
    </div>
  );
};

export default FixedButtons;

const SOCIAL_ICONS = [
  {
    id: 1,
    icon: "icons8-whatsapp",
    link:`https://wa.me/8156881960?text="HI"`,
    text: "Whatsapp",
  },
  {
    id: 2,
    icon: "icons8-facebook",
    link: `https://www.facebook.com/share/151Xqw5P1m/?mibextid=qi2Omg`,
    text: "Facebook",
  },
  {
    id: 3,
    icon: "icons8-linkedin",
    link:`https://www.linkedin.com/company/indian-tour-options/`,
    text: "LinkedIn",
  },
  {
    id: 4,
    icon: "icons8-twitterx",
    link:`https://x.com/TourOptions?t=-Z-QVZBgk0SOboYGSf0lRg&s=09`,
    text: "Twitter",
  },
  {
    id: 5,
    icon: "icons8-youtube",
    link:`https://www.youtube.com/@IndianTourOptions`,
    text: "Youtube",
  },
  {
    id: 6,
    icon: "icons8-instagram",
    link:`https://www.instagram.com/indiantouroptions?igsh=MTRva2RvbTZneXJsMw==`,
    text: "Instagram",
  },
]