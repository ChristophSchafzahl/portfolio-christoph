import { Heading, ProjectInfo, ProjectImages } from '@components/index';

const Projects = ({ projects }) => {
  return (
    <section className="mt-32">
      <Heading>Games I&apos;ve built</Heading>
      <div className="mt-20 grid grid-cols-2 gap-x-20 gap-y-32">
        {[0, 1].map((i, el) => {
          return i % 2 == 0 ? (
            <>
              <ProjectImages />
              <ProjectInfo />
            </>
          ) : (
            <>
              <ProjectInfo />
              <ProjectImages />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
