import React from 'react';
import { Outlet } from 'react-router-dom';
import BannerCarousel from '../../components/BannerCarousel';
import DestinationSection from '../../components/DestinationSection/destinationSection';
import ImageWithText from '../../components/ImageWithText/imageWithText';
import PackageCards from '../../components/PackageCards/packageCards';
import VideoSection from '../../components/VideoSection/videoSection';
import Testimonials from '../../components/Testimonials/testimonials';
import Contact from '../../components/Contact/contact';
import HomeBanner from '../../components/HomeBanner/homeBanner';
import IndianOptions from '../../components/IndianOptions/indianOptions';
import PackageSlider from '../../components/PackageSlider/packageSlider';
import HomeSearch from '../../components/HomeSearch/homeSearch';
import HomeTopBanner from '../../components/HomeTopBanner/homeTopBanner';

const Home = () => {
  return (
    <>
        <HomeTopBanner/>
        <BannerCarousel/>
        <ImageWithText/>
        <PackageSlider/>
        <PackageCards/>
        <DestinationSection/>
        <Testimonials/>
        {/* <IndianOptions/> */}
    </>
  )
}

export default Home
