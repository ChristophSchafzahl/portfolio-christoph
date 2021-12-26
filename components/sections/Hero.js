import Image from 'next/image';
import portrait from '/public/images/portrait.jpg';
import { ArrowLink, IconGithub, IconLinkedin } from '@components/index';

const Hero = ({ socials }) => {
  return (
    <section className="bg-teal-dark w-full flex justify-center pb-36 pt-48 sm:pt-56 -mt-32 -skew-y-6 shadow-lg">
      <div className="max-w-5xl w-full skew-y-6 px-8">
        <div className="w-full flex flex-wrap-reverse justify-center lg:justify-start gap-12 sm:gap-20">
          <div className="max-h-[384px] shadow-lg shadow-teal-darker rounded-3xl">
            <Image
              className="rounded-3xl"
              src={portrait}
              height={384}
              width={384}
              alt="Picture of me"
              objectFit="cover"
              priority
            />
          </div>

          <div className="-mt-3 flex justify-between flex-col">
            <h1 className="max-w-sm mb-6 text-4xl sm:text-5xl !leading-tight font-bold">
              Hey! <br />
              I&apos;m Christoph, <br />a game dev student from Austria
            </h1>
            <div className="flex justify-between items-center">
              <ArrowLink className="text-lg" url={`mailto:${socials.email}`}>
                Email me
              </ArrowLink>
              <div className="flex gap-x-8">
                <a
                  className="hover:text-yellow-600 transition-all"
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconGithub />
                </a>
                <a
                  className="hover:text-yellow-600 transition-all"
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
