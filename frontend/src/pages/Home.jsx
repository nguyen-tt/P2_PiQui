import { Link } from "react-router-dom";
import "../components/home.scss";
import UselessFactsApi from "@components/Home.jsx/UselessFactsApi";

export default function Home() {
  return (
    <div className="centering-home">
      <div className="page-bg">
        <div className="animation-wrapper">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
        </div>
      </div>

      <div className="container-homePage">
        <h1>Bienvenue sur PiQui !</h1>
        <p>
          Vous pouvez consulter les <Link to="rules">règles du jeu</Link> avant
          de lancer une partie!
        </p>
        <p>Sinon vous pouvez directement jouer!</p>
        <Link to="game" className="playbtn">
          <button type="button">JOUER</button>
        </Link>
        <UselessFactsApi />
      </div>
    </div>
  );
}
