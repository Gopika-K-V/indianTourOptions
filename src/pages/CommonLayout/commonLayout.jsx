import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';
import FooterComponent from '../../components/FooterComponent';
import FixedButtons from '../../components/FixedButtons';
import useGetDeviceType from '../../customHooks/useGetDeviceType';
import FixedButtonsMobile from '../../components/FixedButtonsMobile';

const ScrollToTop = () => {
    useEffect(() => {
       window.scrollTo(0, 0);
    }, []);
  
    return null;
  };
const CommonLayout = () => {
  
  const {isMobile} = useGetDeviceType();

  return (
    <>
      <ScrollToTop />
      <HeaderComponent/>
      <main>
          <Outlet/>
      </main>
      <FooterComponent/>
      {isMobile ?
        <FixedButtonsMobile/>
      :
        <FixedButtons/>
      }
    </>
  );
};

export default CommonLayout;
