import { Link, useParams } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function NavBar({ setRegisteredPseudo, registeredPseudo, wins }) {
  const [showItems, setShowItems] = useState(false);
  const { pseudo } = useParams();

  function handleShowsItems() {
    setShowItems(!showItems);
  }

  return (
    <nav className={`navbar ${showItems ? "shownav" : "hidenav"} `}>
      <div className="navbarLogo">
        <Link to="/" className="navbarLink">
          <h1>PiQui</h1>
        </Link>
      </div>
      <div className="navbarPseudo">{pseudo && <p>Chalut {pseudo} !</p>}</div>
      {registeredPseudo && (
        <div className="display-acc-name">
          {registeredPseudo} <br />
          Nombre de victoires: {wins}
        </div>
      )}
      <div>
        <ul className="navbarlist">
          {registeredPseudo && (
            <li className="navbarItems">
              <button type="button" onClick={() => setRegisteredPseudo("")}>
                Se déconnecter
              </button>
            </li>
          )}
          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/game/${pseudo}`} className="navbarLink">
                Jeu
              </Link>
            ) : (
              <Link to="/game" className="navbarLink">
                Jeu
              </Link>
            )}
          </li>

          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/rules/${pseudo}`} className="navbarLink">
                Règles
              </Link>
            ) : (
              <Link to="/rules" className="navbarLink">
                Règles
              </Link>
            )}
          </li>

          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/contact/${pseudo}`} className="navbarLink">
                Contact
              </Link>
            ) : (
              <Link to="/contact" className="navbarLink">
                Contact
              </Link>
            )}
          </li>

          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/aboutUs/${pseudo}`} className="navbarLink">
                L'équipe
              </Link>
            ) : (
              <Link to="/aboutUs" className="navbarLink">
                L'équipe
              </Link>
            )}
          </li>
        </ul>
        <button
          type="button"
          className="navbarBurger"
          onClick={handleShowsItems}
        >
          <span className="burgerBar" />
        </button>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  registeredPseudo: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
  setRegisteredPseudo: PropTypes.func.isRequired,
};

export default NavBar;
