// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import aboutImage1 from "../../../assets/slider_image.jpg";
import aboutImage2 from "../../../assets/slider_1.jpg";
import aboutImage3 from "../../../assets/slider_2.jpg";
import aboutImage4 from "../../../assets/slider_3.jpg";
import aboutImage5 from "../../../assets/slider_4.jpg";
import aboutImage6 from "../../../assets/slider_5.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide className="swiper-slide">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={aboutImage1}
              alt="Slider 1"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={aboutImage2}
              alt="Slider 2"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={aboutImage3}
              alt="Slider 3"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={aboutImage4}
              alt="Slider 4"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={aboutImage5}
              alt="Slider 5"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={aboutImage6}
              alt="Slider 6"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
