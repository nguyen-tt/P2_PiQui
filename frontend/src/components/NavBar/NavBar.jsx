// import { Component } from 'react';
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="NavbarItems">
      <h1>PIQUI</h1>
      <div>
        <ul id="navbarlist">
          <li>
            <a href="index.html">Jeu</a>
          </li>
          <li>Regle</li>
          <li>Contact</li>
          <li>Soutenez-nous</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
