import { useState, useEffect } from "react";
import list from "../components/Characters/CharactersList";
import CheckCharacter from "../components/Game/CheckCharacter";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  const [char, setChar] = useState({});
  const [isAvatar, setIsAvatar] = useState(false);
  const [crit, setCrit] = useState("");
  const [inGame, setInGame] = useState(list);
  const [outGame, setOutGame] = useState([]);

  const handleRandomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    setChar(choosenOne);
    setIsAvatar(false);
  };
  function handleClick(e, item) {
    setIsAvatar(item.id === char.id);
    item.id !== char.id && e.currentTarget.classList.add("disabled");
  }

  useEffect(() => {
    handleRandomCharSelect();
  }, []);

  // fonction bouton replay//
  function launchNewGame() {
    handleRandomCharSelect();
    setInGame(list);
  }

  return (
    <div className="GamePage">
      <div className="leftSide">
        <div className="charactersContainer">
          {list.map((item) => (
            <button
              type="button"
              key={item.id}
              id={item.id}
              className="cats"
              onClick={(e) => handleClick(e, item)}
            >
              <img src={item.src} alt="cat" />
            </button>
          ))}
        </div>
        <CriteriaBtn crit={crit} setCrit={setCrit} />
      </div>

      <div className="rightSide">
        <img src={char.src} alt="random cat" className="guess" />
        <button
          type="button"
          onClick={handleRandomCharSelect}
          className="generate"
        >
          generate random cat to guess
        </button>
        <CheckCharacter
          src={char.src}
          id={char.id}
          criteria={char.criteria}
          crit={crit}
          inGame={inGame}
          setInGame={setInGame}
          outGame={outGame}
          setOutGame={setOutGame}
        />
        <p>Did i pick the right avatar ?</p>
        <p>{isAvatar.toString()}</p>
        <button type="button" onClick={launchNewGame}>
          Rejouer
        </button>
      </div>
    </div>
  );
}

export default Game;
