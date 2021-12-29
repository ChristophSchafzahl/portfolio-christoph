import { Heading } from '@components/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper';
import 'swiper/css/bundle';

const Modeling = ({ models }) => {
  const { main, houses } = models;
  return (
    <section className="mt-32">
      <Heading>3D Models</Heading>
      <p className="max-w-3xl leading-8 text-xl mb-10 pl-6 lg:pl-0 pr-6 md:pr-0">
        Hard surface modelling, sculpting, rigging, texturing, shading, animating, you name it, I
        have done it. My passion for 3D modelling originally stems from my desire to become a game
        developer. I am a self taught 3D artist and mainly use my skills for passion projects or for
        game assets.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 pl-6 lg:pl-0 pr-6 md:pr-0">
        <img
          className="md:col-span-6 w-full h-80 object-cover rounded-2xl shadow-lg"
          src={`/images/models/${main[1]}`}
          alt="Model 1"
        />
        <img
          className="md:col-span-4 w-full h-80 object-cover rounded-2xl shadow-lg"
          src={`/images/models/${main[0]}`}
          alt="Model 1"
        />
        <img
          className="md:col-span-10 w-full h-[24rem] object-cover rounded-2xl shadow-lg"
          src={`/images/models/${main[2]}`}
          alt="Model 1"
        />
        <Swiper
          className="houses-swiper md:col-span-4 w-full h-full"
          modules={[EffectCards, Navigation]}
          effect="cards"
          navigation={true}
        >
          {houses.map((image, idx) => {
            return (
              <SwiperSlide
                className="flex justify-center items-center rounded-2xl shadow-lg"
                key={idx}
              >
                <img
                  className="w-full h-full object-cover"
                  src={`/images/models/houses/${image}`}
                  alt={`House model ${idx + 1}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <img
          className="md:col-span-5 md:col-start-6 w-full h-80 object-cover rounded-2xl shadow-lg"
          src={`/images/models/${main[3]}`}
          alt="Model 1"
        />
      </div>
    </section>
  );
};

export default Modeling;
