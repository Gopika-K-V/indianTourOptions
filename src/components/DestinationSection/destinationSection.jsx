import React from 'react';
import styles from "./destinationSection.module.scss";
import Assets from "../../assets/assets";
import { Link } from 'react-router-dom';
import Animate from '../Animate/animate';

const DestinationSection = () => {
  return (
    <Animate as='section' effect='fade-in'  className={styles.destinations_section} id="destinations">
        <div className="container">
            <h2 className={`title_main`}>Packages</h2>
            <h6 className={`sub_title`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
            <div className={styles.destinations_wrapper}>
                <div className="row">
                    {destinations.map((item) => {
                        return(
                            <div className="col-12 col-md-4" key={item.id}>
                                <Link to={item?.link} className={styles.destination_item}>
                                    <div className={styles.img_wrapper}>
                                        <figure className={`ratio`}>
                                            <img src={item.image} alt={item.alt}/>
                                        </figure>
                                    </div>
                                    <div className={styles.destination_content}>
                                        <p className={styles.destination_title}>{item.destination_title}</p>
                                        <p className={styles.destination_desc}>{item.destination_desc}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </Animate>
  );
};

export default DestinationSection;


const destinations =[
    {
        id: 1,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "destination",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        link: "/kochi",
        image: Assets.destinationImg,
        alt: "destination_img",
        destination_title: "destination",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        link: "/kochi",
        image: Assets.thumbImage,
        alt: "destination_img",
        destination_title: "destination",
        destination_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]