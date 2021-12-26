import { Hero, About, Skills, Projects, Modeling, Contact, Footer } from '@components/index';
import { skills, socials, projects } from '/data/data';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-teal-darker text-teal-50">
      <Hero socials={socials} />
      <main className="max-w-4xl w-full px-8">
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Modeling />
        <Contact socials={socials} />
      </main>
      <Footer />
    </div>
  );
}
