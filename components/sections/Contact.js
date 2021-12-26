import { IconGithub, IconLinkedin } from '@components/index';

const Contact = ({ socials }) => {
  return (
    <section className="mt-32">
      <h2 className="font-bold text-4xl">Get in Touch</h2>
      <p className="mt-10 text-lg">
        You can reach me via email at{' '}
        <a className="text-yellow-600" href={`mailto:${socials.email}`}>
          {socials.email}
        </a>
      </p>
      <div className="mt-10 flex gap-8">
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
    </section>
  );
};

export default Contact;
