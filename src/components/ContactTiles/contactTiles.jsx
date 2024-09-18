import React from 'react'
import styles from "./contactTiles.module.scss";
import { Link } from 'react-router-dom';
import Iconmoon from '../Icomoon/icoMoon';
import useGetDeviceType from '../../customHooks/useGetDeviceType';

const ContactTiles = () => {
  const {isMobile} = useGetDeviceType();

  return (
    <div className={styles.contact_tiles}>
      <div className={`container`}>
        <h2 className={`title_main`}>Feel Free To Connect Us</h2>
        <h6 className={`sub_title`}>Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua.</h6>
        <div className={styles.contact_wrapper}>
        <div className={`row justify-content-center`}>
            {ADDRESSDATA.map((item) => {
              return (
                <div className={`col-12 col-md-3`}>
                  <Link key={item?.id} target='_blank' to={item?.link} className={styles.contact_item}>
                  <Iconmoon icon={item?.icon} color={"#000"} size={isMobile ? 20 : 30} />
                  <span>{item?.title}</span>
                  <span>{item?.data}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
        <h2 className={`title_main mt-5 pt-2`}>Find Us On Social Media</h2>
        <div className={styles.media_wrapper}>
          <div className={`row justify-content-center`}>
            {SOCIAL_ICONS.map((item) => {
              return (
                <div className={`col-2 col-md-1`}>
                  <Link key={item?.id} to={item?.link} className={styles.media_item}>
                  <Iconmoon icon={item?.icon} color={"#FFF"} size={isMobile ? 24 : 40} />
                  {/* <span>{item?.text}</span> */}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactTiles;

const ADDRESSDATA = [
  // {
  //   id: 1,
  //   icon: "location",
  //   title: "Locate Us",
  //   data : "Address",
  //   link: "#",
  // },
  {
    id: 2,
    icon: "call",
    title: "Call Us On",
    data : "+91 9633071579",
    link: "tel:+91 9633071579",
  },
  {
    id: 3,
    icon: "chat1",
    title: "Mail Us",
    data : "arjunashok1000@gmail.com",
    link: "mailto:arjunashok1000@gmail.com",
  },
  {
    id: 4,
    icon: "icon-whatsapp",
    title: "Whatsapp",
    data : "+91 9633071579",
    link: `https://wa.me/8156881960?text="ENQUIRY FROM ITO"`,
  }
]

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
