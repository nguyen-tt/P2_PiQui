import DisplayCharacters from "../components/Characters/DisplayCharacters";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  const characters = [];
  for (let i = 0; i < 32; i += 1) {
    characters.push(<DisplayCharacters />);
  }

  return (
    <div className="GamePage">
      {characters.length === 32 && (
        <div className="charactersContainer">{characters}</div>
      )}
      <CriteriaBtn />
    </div>
  );
}

export default Game;
