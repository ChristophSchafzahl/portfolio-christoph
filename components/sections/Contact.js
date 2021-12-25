import { IconGithub, IconLinkedin } from '@components/index';

const Contact = () => {
  return (
    <section className="mt-32">
      <h2 className="font-bold text-4xl">Get in Touch</h2>
      <p className="mt-10 text-lg">
        You can reach me via email at{' '}
        <a className="text-yellow-600" href="mailto:christoph.schafzahl@gmail.com">
          christoph.schafzahl@gmail.com
        </a>
      </p>
      <div className="mt-10 flex gap-10">
        <IconGithub />
        <IconLinkedin />
      </div>
    </section>
  );
};

export default Contact;
