import Image from 'next/image';
import portrait from '../../public/images/portrait.jpg';
import { ArrowLink, Heading } from '..';

const Hero = () => {
  return (
    <section className="bg-teal-dark w-full flex justify-center pb-36 pt-36 sm:pt-48 -mt-20 px-4 -skew-y-6 shadow-lg">
      <div className="skew-y-6 flex justify-center flex-wrap-reverse gap-12 sm:gap-20">
        <div className="max-h-[384px] shadow-lg shadow-teal-darker rounded-3xl">
          <Image
            className="rounded-3xl"
            src={portrait}
            height={384}
            width={384}
            alt="Picture of me"
            objectFit="cover"
          />
        </div>

        <div className="-mt-3 flex justify-between flex-col">
          <h1 className="max-w-sm mb-6 text-teal-50 text-4xl sm:text-5xl !leading-tight font-bold">
            Hey! <br />
            I&apos;m Christoph, <br />a game dev student from Austria
          </h1>
          <ArrowLink url="mailto:christoph.schafzahl@gmail.com">Email me</ArrowLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
