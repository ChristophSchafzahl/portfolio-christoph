import { Heading } from '@components/index';

const About = () => {
  return (
    <section className="w-full mt-40">
      <Heading>About Me</Heading>
      <p className="max-w-2xl leading-8 text-xl">
        I&apos;m currently studying Multimedia Technology at the University of Applied Sciences in
        Salzburg. I have always been a technic freek and graduated the HTL in Weiz, which focuses on
        electrical engineering with honours.
      </p>
      <p className="max-w-2xl leading-8 text-xl mt-8">
        Though my real passion has always been game development. And ever since I was ten, I made my
        dream reality, by picking up blender and writing my first programs with visual basic. While
        my focus nowadays lies on the programming side, I am still refining my 3D skills as a hobby.
      </p>
    </section>
  );
};

export default About;
