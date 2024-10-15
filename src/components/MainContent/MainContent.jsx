import PropTypes from "prop-types";
import "./MainContent.css";

export const MainContent = ({ children }) => {
  return <div className="main">{children}</div>;
};

MainContent.propTypes = {
  children: PropTypes.node,
};
export default MainContent;
