import PropTypes from "prop-types";
import "./Buttons.css";

const ConfirmButton = ({ confirm }) => {
  return (
    <button className="confirm__btn" onClick={confirm}>
      confirm
    </button>
  );
};

ConfirmButton.propTypes = {
  confirm: PropTypes.func,
};

export default ConfirmButton;
