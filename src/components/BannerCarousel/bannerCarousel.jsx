import Carousel from 'react-bootstrap/Carousel';
import styles from "./bannerCarousel.module.scss";
import assets from '../../assets/assets';

const BannerCarousel = () => {
  return (
    <section className={styles.home_banner}>
      <Carousel fade>
        {BannerItems.map((item) => {
          return (
            <Carousel.Item key={item.id} interval={8000} indicator={false} controls={false}>
              {item?.type === "image" ?
                <>
                  <div className={styles.img_section}>
                    <figure className={`ratio`}>
                      {/* Desktop Image */}
                      <img src={item.imgDesktop} className='d-none d-sm-block' alt="banner_img" />
                      {/* Mobile Image */}
                      <img src={item.imgMobile} className='d-sm-none' alt="banner_img" />
                    </figure>
                  </div>
                  {item?.title &&
                    <div className={styles.content_section}>
                      <Carousel.Caption>
                        <h3 className={styles.main_title}>{item?.title}</h3>
                        <p className={styles.banner_desc}>{item?.subtitle}</p>
                      </Carousel.Caption>
                    </div>
                  }
                </>
                :
                <>
                  <div className={`${styles.video_section} ratio`}>
                    <video width="100%" autoPlay muted loop>
                      <source src={item?.img} type="video/mp4" />
                    </video>
                  </div>
                  <div className={styles.content_section}>
                    <Carousel.Caption>
                      <div className={`row`}>
                        {item?.content.map((count) =>{
                          return(
                            <div className={`col-4`}>
                              <h3 className={styles.count_title}>{count?.count}</h3>
                              <p className={styles.count_desc}>{count?.desc}</p>
                            </div>
                          )
                        })}
                      </div>
                    </Carousel.Caption>
                  </div>
                </>
              }

            </Carousel.Item>
          )
        })}
      </Carousel>
    </section>
  );
}

export default BannerCarousel;

const BannerItems = [
  // {
  //   id: 2,
  //   title: "",
  //   subtitle: "",
  //   imgDesktop: assets.walkWeb,
  //   imgMobile: assets.walkMob,
  //   type: "image",

  // },
  // {
  //   id: 3,
  //   title: "",
  //   subtitle: "",
  //   imgDesktop: assets.fdWeb,
  //   imgMobile: assets.fdMob,
  //   type: "image",

  // },
  // {
  //   id: 1,
  //   title: "",
  //   subtitle: "",
  //   imgDesktop: assets.theyamWeb,
  //   imgMobile: assets.theyamMob,
  //   type: "image",
  // },
  // {
  //   id: 4,
  //   title: "",
  //   subtitle: "",
  //   imgDesktop: assets.boatWeb,
  //   imgMobile: assets.boatMob,
  //   type: "image",

  // },
  // {
  //   id: 5,
  //   title: "",
  //   subtitle: "",
  //   imgDesktop: assets.cycleWeb,
  //   imgMobile: assets.elephantMob,
  //   type: "image",

  // },
  {
    id: 6,
    img: assets.BannerVideo,
    type: "video",
    content: [
      {
        id: 1,
        count: "30+",
        desc: "Tours"
      },
      {
        id: 2,
        count: "200+",
        desc: "Satisfied Customers"
      },
      {
        id: 2,
        count: "20+",
        desc: "Destinations"
      },
    ]
  },
]