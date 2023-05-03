import { Link, useParams } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function NavBar({ regiteredPseudo, wins }) {
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
      {regiteredPseudo && (
        <div className="display-acc-name">
          {regiteredPseudo} <br />
          Nombre de victoires: {wins}
        </div>
      )}
      <div>
        <ul className="navbarlist">
          {regiteredPseudo && (
            <li className="navbarItems">
              <button type="button">Se déconnecter</button>
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
  regiteredPseudo: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
};

export default NavBar;
