import Image from 'next/image';
import portrait from '../../public/images/portrait.jpg';
import { ArrowLink } from '..';

const Hero = () => {
  return (
    <section className="hero-bg bg-teal-dark w-full flex justify-center flex-wrap-reverse gap-12 sm:gap-20 pb-36 pt-20 sm:pt-32 px-4">
      <Image
        className="rounded-3xl"
        src={portrait}
        height={384}
        width={384}
        alt="Picture of me"
        objectFit="cover"
      />

      <div className="-mt-3 flex justify-between flex-col">
        <h1 className="max-w-sm text-teal-50 text-4xl sm:text-5xl !leading-tight font-bold">
          Hey! <br />
          I&apos;m Christoph, <br />a game dev student from Austria
        </h1>
        <ArrowLink url="https://www.google.com">Email me</ArrowLink>
      </div>
    </section>
  );
};

export default Hero;
