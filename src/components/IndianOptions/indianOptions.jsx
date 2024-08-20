import styles from "./indianOptions.module.scss";
import assets from '../../assets/assets';

const IndianOptions = () => {
    return (
        <section className={styles.detail_page_section}>
            <div className={`container-fluid`}>
                <div className={`row`}>
                    {specificationCards.map((item) =>{
                        return(
                            <div className={`col-12 col-md-4`} key={item?.id}>
                                <Link to={item?.link}>
                                    <div className={styles.asf}></div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default IndianOptions;

const specificationCards =[
    {
        id: 1,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 2,
        image: assets.thumbImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 3,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 4,
        image: assets.aboutImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 5,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 6,
        image: assets.thumbImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 7,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 8,
        image: assets.aboutImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
    {
        id: 9,
        image: assets.SpecificationImage,
        title: "Cycle Tours",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "/",
    },
]
