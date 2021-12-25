import { Hero, About, Skills, Projects } from '@components/index';
import { skills } from '/data/index';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-teal-darker text-teal-50">
      <Hero />
      <main className="max-w-4xl w-full px-8">
        <About />
        <Skills skills={skills} />
        <Projects />
      </main>
      <div className="h-32"></div>
    </div>
  );
}
