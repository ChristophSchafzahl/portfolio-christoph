import { ArrowRight } from '.';

const ArrowLink = ({ children, url }) => {
  return (
    <a
      href={url}
      className="font-bold text-yellow-600 text-lg inline-flex items-center gap-1 hover:gap-2 transition-all"
    >
      <span>{children}</span>
      <ArrowRight />
    </a>
  );
};

export default ArrowLink;
