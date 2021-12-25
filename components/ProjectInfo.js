import { ArrowLink } from '@components/index';

const ProjectInfo = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-2xl font-bold">Towerhold</h3>
      <p className="my-6 text-lg">
        Bacon ipsum dolor amet duis ham hock qui kevin consectetur ex sint quis minim nostrud velit
        dolore incididunt. Deserunt ut short ribs andouille pastrami in biltong aliquip duis laboris
        leberkas tenderloin proident.
      </p>
      <div className="flex justify-between">
        <ArrowLink className="text-lg" url="https://google.com">
          Read More
        </ArrowLink>
        <ArrowLink className="text-lg" url="https://google.com">
          GitHub
        </ArrowLink>
      </div>
    </div>
  );
};

export default ProjectInfo;
