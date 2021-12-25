import { Heading } from '@components/index';

const About = () => {
  return (
    <section className="w-full mt-40">
      <Heading>About Me</Heading>
      <p className="max-w-2xl leading-8 text-xl">
        Bacon ipsum dolor amet duis ham hock qui kevin consectetur ex sint quis minim nostrud velit
        dolore incididunt. Deserunt ut short ribs andouille pastrami in biltong aliquip duis laboris
        leberkas tenderloin proident.
      </p>
      <p className="max-w-2xl leading-8 text-xl mt-8">
        Pork venison ham duis, exercitation in aliquip ullamco. Pariatur kevin in biltong do beef
        strip steak ut quis excepteur doner. Picanha velit bresaola sint culpa. Dolore aliqua
        commodo dolor ut aute shankle ribeye corned beef prosciutto boudin ipsum.
      </p>
    </section>
  );
};

export default About;
