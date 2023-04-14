import DisplayCharacters from "@components/Characters/DisplayCharacters";
import "../components/Characters/Game.scss";
import NavBar from "@components/NavBar/NavBar";
import Footer from "@components/Footer/Footer";

function Game() {
  const characters = [];
  for (let i = 0; i < 32; i += 1) {
    characters.push(<DisplayCharacters />);
  }

  return (
    characters.length === 32 && (
      <>
        <NavBar />
        <div className="charactersContainer">{characters}</div>
        <Footer />
      </>
    )
  );
}

export default Game;
