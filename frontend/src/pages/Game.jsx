import { useState, useEffect } from "react";
import list from "@components/Characters/CharactersList";
import CheckCharacter from "@components/Game/CheckCharacter";
import GetCharacters from "../components/Characters/GetCharacters";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  const [char, getChar] = useState({});
  const [crit, setCrit] = useState("");

  const randomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    return choosenOne;
  };

  const handleRandomCharSelect = () => {
    getChar(randomCharSelect());
  };

  useEffect(() => {
    getChar(randomCharSelect());
  }, []);

  return (
    <div className="GamePage">
      <div className="charactersContainer">
        {list.map((item) => (
          <GetCharacters imgSrc={item.src} key={item.id} />
        ))}
      </div>
      <CriteriaBtn crit={crit} setCrit={setCrit} />
      <div className="rightside">
        <button
          type="button"
          onClick={handleRandomCharSelect}
          className="generate"
        >
          generate random cat to guess
        </button>
        <img src={char.src} alt="random cat" className="guess" />
        <CheckCharacter
          src={char.src}
          id={char.id}
          criteria={char.criteria}
          crit={crit}
        />
      </div>
    </div>
  );
}

export default Game;
