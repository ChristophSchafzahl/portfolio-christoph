import { Heading } from '@components/index';

const Modeling = ({ models }) => {
  return (
    <section className="mt-32">
      <Heading>3D Models</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-models gap-6">
        <img
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
          src={`/images/models/${models[0]}`}
          alt="Model 1"
        />
        <img
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
          src={`/images/models/${models[1]}`}
          alt="Model 1"
        />
        <img
          className="w-full h-80 object-cover rounded-2xl shadow-lg sm:col-span-2"
          src={`/images/models/${models[2]}`}
          alt="Model 1"
        />
      </div>
    </section>
  );
};

export default Modeling;
