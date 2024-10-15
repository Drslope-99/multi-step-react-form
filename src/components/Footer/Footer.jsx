import PropTypes from "prop-types";
import "./Footer.css";

export const Footer = ({ children }) => {
  return <div className="footer">{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.node,
};
export default Footer;
