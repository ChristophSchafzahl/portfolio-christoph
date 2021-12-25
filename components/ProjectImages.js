import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper';
import 'swiper/css/bundle';

const ProjectImages = ({ className, images }) => {
  return (
    <div>
      <div className="swiper-button-prev !left-auto !right-full ml-4"></div>
      <div className="swiper-button-prev !right-auto !left-full ml-4"></div>
      <Swiper modules={[EffectCards, Navigation]} effect="cards" navigation={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectImages;
