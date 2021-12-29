import { ArrowLink } from '@components/index';

const ProjectInfo = ({ info }) => {
  const { title, description, links } = info;
  return (
    <p>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="my-6 text-lg">{description}</p>
      <div className="flex justify-between">
        {links.map((link, idx) => {
          const { text, url } = link;
          return (
            <ArrowLink key={idx} className="text-lg" url={url}>
              {text}
            </ArrowLink>
          );
        })}
      </div>
    </p>
  );
};

export default ProjectInfo;
