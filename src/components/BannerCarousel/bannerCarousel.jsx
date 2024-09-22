import Carousel from 'react-bootstrap/Carousel';
import styles from "./bannerCarousel.module.scss";
import assets from '../../assets/assets';

const BannerCarousel = () => {
  return (
    <section className={styles.home_banner}>
      <Carousel fade>
        {BannerItems.map((item) => {
          return(
            <Carousel.Item key={item.id} interval={8000}>
                {item?.type === "image" ?
                  <div className={styles.img_section}>
                    <figure className={`ratio`}>
                      {/* Desktop Image */}
                      <img src={item.imgDesktop} className='d-none d-sm-block' alt="banner_img" />
                      {/* Mobile Image */}
                      <img src={item.imgMobile} className='d-sm-none' alt="banner_img" />
                    </figure>
                  </div>
                :
                <div className={styles.video_section}>
                  <video className={`ratio`} width="100%"  autoplay>
                    <source src={item?.img} type="video/mp4"/>
                  </video>
                </div>
                }
              {item?.title &&
                <div className={styles.content_section}>
                  <Carousel.Caption>
                    <h3 className={styles.main_title}>{item?.title}</h3>
                    <p className={styles.banner_desc}>{item?.subtitle}</p>
                  </Carousel.Caption>
                </div>
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
  {
    id: 1,
    title: "Indian Tour Options",
    subtitle: "Escape The Ordinary",
    imgDesktop: assets.theyamWeb,
    imgMobile: assets.theyamMob,
    type: "image",
  },
  {
    id: 2,
    title: "Cycle Tours",
    subtitle: "Where you experience something different",
    imgDesktop: assets.walkWeb,
    imgMobile: assets.walkMob,
    type: "image",
    
  },
  {
    id: 3,
    title: "Plantation Visit",
    subtitle: "Indian ",
    imgDesktop: assets.fdWeb,
    imgMobile: assets.fdMob,
    type: "image",
    
  },
  {
    id: 4,
    title: "Ayrvedic Treatment",
    subtitle: "Indian ",
    imgDesktop: assets.boatWeb,
    imgMobile: assets.boatMob,
    type: "image",
    
  },
  {
    id: 5,
    title: "Trekking",
    subtitle: "Indian Tour Options",
    imgDesktop: assets.elephantWeb,
    imgMobile: assets.elephantMob,
    type: "image",
    
  },
  // {
  //   id: 6,
  //   img: assets.BannerVideo,
  //   type: "video",
  // },
]