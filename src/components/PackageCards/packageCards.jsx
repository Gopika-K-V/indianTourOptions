import React from 'react';
import styles from "./packageCards.module.scss";
import PackageCard from '../PackageCard/packageCard';
import Assets from '../../assets/assets';
import Animate from '../Animate/animate';


const PackageCards = () => {
  return (
    <Animate as='section' effect='fade-in'  className={styles.specification_section} id="packageCard">
        <div className="container">
            <h2 className="title_main">Specifications</h2>
            <h6 className="sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
            <div className={styles.cards_wrapper}>
                <div className={`row`}>
                    {specificationCards.map((item) =>{
                        return(
                            <div className={`col-12 col-md-3 col-lg-4`} key={item?.id}>
                                <PackageCard props={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </Animate>
  );
};

export default PackageCards;

const specificationCards =[
    {
        id: 1,
        image: Assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 2,
        image: Assets.thumbImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 3,
        image: Assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 4,
        image: Assets.aboutImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 5,
        image: Assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 6,
        image: Assets.thumbImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 7,
        image: Assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 8,
        image: Assets.aboutImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 9,
        image: Assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
]
