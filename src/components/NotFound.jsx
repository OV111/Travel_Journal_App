import FuzzyText from "./FuzzyText";

const NotFound = () => {
  return (
    <div className="mx-35 my-50">

    <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true} >
      404 Not Found
    </FuzzyText>
    </div>
  );
};
export default NotFound;
