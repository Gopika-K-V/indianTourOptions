const destinationImg = new URL("./Images/logo-new.png", import.meta.url).href;
const SpecificationImage = new URL("./Images/dummy_image.jpg", import.meta.url).href;
const aboutImage = new URL("./Images/about-img.png", import.meta.url).href;
const thumbImage = new URL("./Images/thumb_img.jpg", import.meta.url).href;


const BanneImg1 = new URL("./Images/banners/Theyyam.jpg", import.meta.url).href;
const BanneImg2 = new URL("./Images/banners/plantation_visit.jpg", import.meta.url).href;
const BanneImg3 = new URL("./Images/banners/cycle_tours.jpg", import.meta.url).href;
const BanneImg4 = new URL("./Images/banners/Treatment.jpg", import.meta.url).href;
const BanneImg5 = new URL("./Images/banners/trekking.jpg", import.meta.url).href;
const BannerVideo = new URL("./Images/banners/banner_video.mp4", import.meta.url).href;

const assets  ={
    destinationImg,
    SpecificationImage,
    aboutImage,
    thumbImage,

    BanneImg1,
    BanneImg2,
    BanneImg3,
    BanneImg4,
    BanneImg5,
    BannerVideo,
}

export default assets;