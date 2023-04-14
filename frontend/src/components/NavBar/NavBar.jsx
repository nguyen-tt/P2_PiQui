// import { Component } from 'react';
import "./NavBar.scss";
import { useState } from "react";

function NavBar() {
  const [showItems, setShowItems] = useState(false);
  function handleShowsItems() {
    setShowItems(!showItems);
  }
  return (
    <nav className={`navbar ${showItems ? "shownav" : "hidenav"} `}>
      <div className="navbarLogo">
        <h1>PIQUI</h1>
      </div>
      <div>
        <ul className="navbarlist">
          <li className="navbarItems">
            <a href="index.html" className="navbarLink">
              Jeu
            </a>
          </li>
          <li className="navbarItems">
            <a href="index.html" className="navbarLink">
              Regle
            </a>
          </li>
          <li className="navbarItems">
            <a href="index.html" className="navbarLink">
              Contact
            </a>
          </li>
          <li className="navbarItems">
            <a href="index.html" className="navbarLink">
              Soutenez-nous
            </a>
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

export default NavBar;
