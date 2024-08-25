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

const Home = () => {
  return (
    <>
        <BannerCarousel/>
        <ImageWithText/>
        <VideoSection/>
        <HomeBanner/>
        <PackageCards/>
        <DestinationSection/>
        <Testimonials/>
        <IndianOptions/>
        <Contact/>
    </>
  )
}

export default Home
