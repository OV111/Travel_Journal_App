import FuzzyText from "./FuzzyText ";

const NotFound = () => {
  return (
    <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
      404 Not Found
    </FuzzyText>
  );
};
export default NotFound;
