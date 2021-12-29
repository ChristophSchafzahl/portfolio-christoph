import { Heading, ProjectInfo, ProjectImages } from '@components/index';
import React from 'react';
import useWindowDimensions from '/hooks/useWindowDimensions';

const Projects = ({ projects }) => {
  const { width } = useWindowDimensions();
  return (
    <section className="mt-32">
      <Heading>Games I&apos;ve built</Heading>
      <div className="mt-20 pl-6 pr-9 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 md:gap-y-32">
        {projects.map((project, i) => {
          const { images, ...info } = project;
          return width >= 768 && i % 2 == 0 ? (
            <React.Fragment key={i}>
              <ProjectImages images={images} />
              <ProjectInfo info={info} />
            </React.Fragment>
          ) : (
            <React.Fragment key={i}>
              <ProjectInfo info={info} />
              <ProjectImages images={images} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
