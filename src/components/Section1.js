// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

function Section1 (){
    return(
        <section className="w-full h-[50vh] mg:h-[80vh] lg:h-[100vh]">
          <img
            className="absolute top-[50px] sm:-top-[50px] -left-1/2"
            src="./img/main-bg-img.png"
          />
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide className="w-1/2">
              <img
                className="absolute top-1/2 left-1/2 max-w-[1200px] w-[90%]"
                src="./img/main-img1.png"
              />
            </SwiperSlide>
            <SwiperSlide className="w-1/2">
              <img
                className="absolute top-1/2 left-1/2 max-w-[1200px] w-[90%]"
                src="./img/main-img2.png"
              />
            </SwiperSlide>
          </Swiper>
        </section>
    )
};

export default Section1;
