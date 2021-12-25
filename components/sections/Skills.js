import { Heading, SkillBubble } from '@components/index';

const Skills = ({ skills }) => {
  return (
    <section className="mt-32">
      <Heading>Tech I&apos;ve worked with</Heading>
      <div className="mt-10 max-w-2xl flex-wrap flex gap-x-4 gap-y-8">
        {skills.map((skill) => (
          <SkillBubble key={skill} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
