import DisplayCharacters from "@components/Characters/DisplayCharacters";
import "../components/Characters/Game.scss";

function Game() {
  const characters = [];
  for (let i = 0; i < 32; i += 1) {
    characters.push(<DisplayCharacters />);
  }

  return (
    characters.length === 32 && (
      <div className="charactersContainer">{characters}</div>
    )
  );
}

export default Game;
