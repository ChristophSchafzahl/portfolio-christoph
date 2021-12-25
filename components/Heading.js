const Heading = ({ children }) => {
  return (
    <h2 className="text-teal-50 font-serif font-bold text-4xl">
      {children}
      <span className="bg-yellow-600 h-1 w-28 block mt-3" />
    </h2>
  );
};

export default Heading;
