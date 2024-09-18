import React from 'react'
import { Link } from 'react-router-dom';
import Iconmoon from '../Icomoon/icoMoon';
import styles from "./fixedButtonsMobile.module.scss";
import useHeaderToFix from '../../customHooks/useHeaderToFix';

const FixedButtonsMobile = () => {
  const isHeaderFixed = useHeaderToFix();
  const visibleClass = isHeaderFixed? styles.visible : "";

  return (
    <div className={`${styles.fixed_buttons_mob} ${visibleClass} d-sm-none`}>
        <div className={styles.button_wrapper}>
          {SOCIAL_ICONS.map((item) =>{
            return(
              <Link key={item.id} to={item.link} className={`btn ${styles.icon_btn}`} target="_blank">
                <Iconmoon icon={item.icon} size={30} />
              </Link>
              )
            })}
        </div>
    </div>
  )
}

export default FixedButtonsMobile;

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
