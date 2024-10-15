import PropTypes from "prop-types";
import "./Sidebar.css";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <ul className="sidebar__menu">{props.children}</ul>
    </div>
  );
};

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;
