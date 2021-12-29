import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper';
import 'swiper/css/bundle';

const ProjectImages = ({ images }) => {
  return (
    <div className="min-h-[14rem] relative">
      <div className="swiper-button-prev-unique"></div>
      <div className="swiper-button-next-unique"></div>
      <Swiper
        className="w-full h-full"
        modules={[EffectCards, Navigation]}
        effect="cards"
        navigation={true}
      >
        {images.map((image, idx) => {
          return (
            <SwiperSlide
              className="flex justify-center items-center rounded-2xl shadow-lg"
              key={idx}
            >
              <img
                className="w-full h-full object-cover"
                src={`/images/projects/${image}`}
                alt={`Project image ${idx + 1}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProjectImages;
