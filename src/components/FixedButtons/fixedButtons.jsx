import React, { Fragment } from 'react';
import styles from "./fixedButtons.module.scss";
import Iconmoon from '../Icomoon/icoMoon';
import { Link } from 'react-router-dom';

const FixedButtons = (props) => {
  const { isRight } = props;

  const rightSide = isRight ? styles.right_side : "";

  return (
    <div className={`${styles.fixed_part} ${rightSide} d-none d-sm-block`}>
      <div className={styles.button_wrapper}>
        {isRight ?
          <>
            {CONTACT_ICONS.map((item) => {
              return (
                <Fragment key={item.id}>
                  {item?.link ?
                    <Link to={item.link} className={`btn ${styles.icon_btn}`} target="_blank">
                      {item?.text && <span>{item.text}</span>}
                      <Iconmoon icon={item.icon} color={"#FFF"} size={32} />
                    </Link>
                    : 
                    <div className={`btn ${styles.icon_btn} ${styles.no_hover}`}>
                      {item?.text && <span>{item.text}</span>}
                      <Iconmoon icon={item.icon} color={"#FFF"} size={32} />
                    </div>
                  }
                </Fragment>
              )
            })}
          </>
          :
          <>
            {SOCIAL_ICONS.map((item) => {
              return (
                <Link key={item.id} to={item.link} className={`btn ${styles.icon_btn}`} target="_blank">
                  <span>{item?.text}</span>
                  <Iconmoon icon={item.icon} color={"#FFF"} size={32} />
                </Link>
              )
            })}
          </>
        }
      </div>
    </div>
  );
};

export default FixedButtons;

const SOCIAL_ICONS = [
  // {
  //   id: 1,
  //   icon: "icons8-whatsapp",
  //   link:`https://wa.me/8156881960?text="HI"`,
  //   text: "Whatsapp",
  // },
  {
    id: 2,
    icon: "icons8-facebook",
    link: `https://www.facebook.com/share/151Xqw5P1m/?mibextid=qi2Omg`,
    text: "Facebook",
  },
  {
    id: 3,
    icon: "icons8-linkedin",
    link: `https://www.linkedin.com/company/indian-tour-options/`,
    text: "LinkedIn",
  },
  {
    id: 4,
    icon: "icons8-twitterx",
    link: `https://x.com/TourOptions?t=-Z-QVZBgk0SOboYGSf0lRg&s=09`,
    text: "Twitter",
  },
  {
    id: 5,
    icon: "icons8-youtube",
    link: `https://www.youtube.com/@IndianTourOptions`,
    text: "Youtube",
  },
  {
    id: 6,
    icon: "icons8-instagram",
    link: `https://www.instagram.com/indiantouroptions?igsh=MTRva2RvbTZneXJsMw==`,
    text: "Instagram",
  },
]

const CONTACT_ICONS = [
  {
    id: 1,
    icon: "icons8-whatsapp",
    link: `https://wa.me/8156881960?text="HI"`,
    text: "Whatsapp US",
  },
  {
    id: 2,
    icon: "customer-care",
  },
  {
    id: 3,
    icon: "call-us",
    link: `https://www.youtube.com/@IndianTourOptions`,
    text: "CONTACT US",
  },
]