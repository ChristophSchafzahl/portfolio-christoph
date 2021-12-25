import { ArrowRight } from '.';

const ArrowLink = ({ className, children, url }) => {
  return (
    <a
      href={url}
      className={`font-bold text-yellow-600 inline-flex items-center gap-1 hover:gap-2 transition-all ${className}`}
    >
      <span>{children}</span>
      <ArrowRight />
    </a>
  );
};

export default ArrowLink;
