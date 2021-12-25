import { Hero, About } from '@components/index';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center flex-col bg-teal-darker">
      <Hero />
      <main className="max-w-4xl w-full px-8">
        <About />
      </main>
    </div>
  );
}
