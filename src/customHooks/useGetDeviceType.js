import useGetInnerWidth from "./useGetInnerWidth";

const useGetDeviceType = () => {
   const width = useGetInnerWidth();

  const isDesktop = width > 1023;
  const isTablet = width <= 1023 && width > 576;
  const isMobile = width <= 576;
  
  return {
    width,
    isDesktop,
    isTablet,
    isMobile,
  };

};

export default useGetDeviceType;