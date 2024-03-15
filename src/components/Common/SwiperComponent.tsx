import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

type SwiperProps = {
  children: React.ReactNode;
};

const SwiperComponent = ({ children }: SwiperProps) => {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={15}
        slidesPerView={7}
        navigation={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={`swiper-slide-${index}`}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
