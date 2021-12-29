import { IconArrowRight } from '@components/index';

const ArrowLink = ({ className, children, url }) => {
  return (
    <a
      href={url}
      className={`font-bold text-yellow-600 inline-flex items-center gap-2 group ${className}`}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <IconArrowRight className="group-hover:translate-x-1 transition-all" />
    </a>
  );
};

export default ArrowLink;
