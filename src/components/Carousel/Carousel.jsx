import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import Image1 from '../../assets/240_F_232417499_U9KtXALA8pAr37eTRkbohqD8L3uSrtlB.jpg'
import Image2 from '../../assets/people2.jpg'
import './Carousel.css'
SwiperCore.use([Autoplay, Pagination]);

function ImageSwiper() {
  return (
    <div className='Swiper_img'>
      <Swiper
        autoplay={{ delay: 3000 }}
        speed={1000}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={Image1} alt="Image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="Image2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSwiper;
