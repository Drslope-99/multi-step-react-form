import PropTypes from "prop-types";
import "./Buttons.css";

const BackButton = (props) => {
  return (
    <button className="back__btn" onClick={props.clicked}>
      go back
    </button>
  );
};

BackButton.propTypes = {
  clicked: PropTypes.func,
};

export default BackButton;
