import PropTypes from "prop-types";
import NavBar from "./NavBar/NavBar";

function Layout({ children, regiteredPseudo, wins }) {
  return (
    <>
      <NavBar regiteredPseudo={regiteredPseudo} wins={wins} />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  regiteredPseudo: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
};

export default Layout;
