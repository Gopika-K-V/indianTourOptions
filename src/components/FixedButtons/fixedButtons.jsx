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
                <Iconmoon icon={item.icon} size={30} />
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
    icon: "whatsapp1",
    link:`https://wa.me/8156881960?text="HI"`,
    text: "Whatsapp",
  },
  {
    id: 2,
    icon: "icon-facebook",
    link:`https://wa.me/8156881960?text="HI"`,
    text: "Facebook",
  },
  {
    id: 3,
    icon: "icon-linkedIn",
    link:`https://wa.me/8156881960?text="HI"`,
    text: "LinkedIn",
  },
  {
    id: 4,
    icon: "icon-x",
    link:`https://wa.me/8156881960?text="HI"`,
    text: "Twitter",
  },
  {
    id: 5,
    icon: "icon-youtube",
    link:`https://wa.me/8156881960?text="HI"`,
    text: "Youtube",
  },
]