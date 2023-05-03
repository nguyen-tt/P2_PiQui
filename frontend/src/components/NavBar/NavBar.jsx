import { Link, useParams } from "react-router-dom";
import "./NavBar.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import useSound from "use-sound";
import mp3File from "@assets/cat-meow-14536.mp3";

function NavBar({ regiteredPseudo, wins }) {
  const [showItems, setShowItems] = useState(false);
  const { pseudo } = useParams();

  function handleShowsItems() {
    setShowItems(!showItems);
  }
  const [play] = useSound(mp3File);
  return (
    <nav className={`navbar ${showItems ? "shownav" : "hidenav"} `}>
      <div className="navbarLogo">
        <Link to="/" className="navbarLink">
          <h1>PiQui</h1>
        </Link>
      </div>
      <div className="navbarPseudo">{pseudo && <p>Chalut {pseudo} !</p>}</div>
      <div>
        {regiteredPseudo} <br />
        Nombre de victoires: {wins}
      </div>
      <div>
        <ul className="navbarlist">
          <li className="navbarItems">
            {pseudo ? (
              <Link to={`/game/${pseudo}`} className="navbarLink">
                Jeu
              </Link>
            ) : (
              <Link to="/game" className="navbarLink" onClick={play}>
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
