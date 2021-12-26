import { Hero, About, Skills, Projects, Modeling, Contact, Footer } from '@components/index';
import { skills, socials, projects, models } from '/data/data';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-teal-darker text-teal-50">
      <Hero socials={socials} />
      <main className="max-w-5xl w-full px-8">
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Modeling models={models} />
        <Contact socials={socials} />
      </main>
      <Footer />
    </div>
  );
}
