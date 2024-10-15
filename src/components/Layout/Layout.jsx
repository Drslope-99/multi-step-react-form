import PropTypes from "prop-types";
import "./Layout.css";

const Layout = ({ children }) => {
  return <section className="container grid">{children}</section>;
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
