import PropTypes from "prop-types";
import "./Buttons.css";

const NextButton = (props) => {
  return (
    <button className="next__btn" onClick={props.clicked}>
      next step
    </button>
  );
};

NextButton.propTypes = {
  clicked: PropTypes.func,
};

export default NextButton;
