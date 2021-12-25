import { Heading } from '@components/index';

const Modeling = () => {
  return (
    <section className="mt-32">
      <Heading>3D Models</Heading>
      <div className="grid grid-cols-models gap-6">
        <div className="rounded-2xl h-80 bg-teal-500"></div>
        <div className="rounded-2xl h-80 bg-teal-500"></div>
        <div className="rounded-2xl h-96 bg-teal-500 col-span-2"></div>
      </div>
    </section>
  );
};

export default Modeling;
