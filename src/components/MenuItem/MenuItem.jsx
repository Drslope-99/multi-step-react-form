import PropTypes from "prop-types";
import "./MenuItem.css";
export const MenuItem = (props) => {
  return (
    <li>
      <div className="menu">
        <button className={props.className} onClick={props.clicked}>
          {props.index}
        </button>
        <div className="menu__description">
          <span>{props.step}</span>
          <span>{props.info}</span>
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string,
  index: PropTypes.string,
  step: PropTypes.string,
  info: PropTypes.string,
  clicked: PropTypes.func,
};

export default MenuItem;
