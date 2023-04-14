import "../components/home.scss";

export default function Home() {
  return (
    <div className="centering">
      <div className="homePage">
        <h1>Bienvenue sur PiQui!</h1>
        <p>
          Vous pouvez consulter les <a href=" ">regles du jeu</a> avant de
          lancer une partie!
        </p>
        <p>Sinon vous pouvez directement jouer!</p>
        <button type="button">
          <a href=" ">PLAY</a>
        </button>
      </div>
    </div>
  );
}
