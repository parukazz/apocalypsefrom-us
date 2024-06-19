
// eslint-disable-next-line react/prop-types
const Title = ({ children }) => {
  return (
    <div className="border-l-4 border-r-4 border-lime px-8 font-clashgrotesk uppercase">
      <h3 className="h3">{children}</h3>
    </div>
  );
};

export default Title;
