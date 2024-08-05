import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper CSS 추가

import Test1 from "../../assets/Home/Test1.svg";
import Test2 from "../../assets/Home/Test2.svg";
import Test3 from "../../assets/Home/Test1.svg";
import Test4 from "../../assets/Home/Test2.svg";

const SwiperComponent = () => {
  const images = [Test1, Test2, Test3, Test4];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      direction="horizontal" // 방향 설정
      className='h-[100px]' // Swiper의 높이 설정
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center"> {/* 슬라이드 내용 중앙 정렬 */}
          <img
            className='' 
            src={item} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
