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

  const disabled = document.querySelectorAll(".disabled");

  const handleRandomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    setChar(choosenOne);
    setIsAvatar(false);
  };

  function handleClick(e, item) {
    setIsAvatar(item.id === char.id);
    return item.id !== char.id && e.currentTarget.classList.add("disabled");
  }

  useEffect(() => {
    handleRandomCharSelect();
  }, []);

  // fonction bouton replay//
  function launchNewGame() {
    handleRandomCharSelect();
    setInGame(list);
    setCrit("");
    for (const i of disabled) {
      i.classList.remove("disabled");
    }
    for (const i of list) {
      i.active = true;
    }
  }

  return (
    <div className="GamePage">
      <div className="background"></div>
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
        <figure>
          <img
            src={isAvatar ? char.src : "https://robohash.org/Alaric?set=set4"}
            alt="random cat"
            className={!isAvatar && "guess"}
          />
          <figcaption>Devine le chat mystère!</figcaption>
        </figure>
        {isAvatar && (
          <div>
            <p>BRAVO!</p>
            <button type="button" onClick={launchNewGame}>
              Rejouer
            </button>
          </div>
        )}
        <CheckCharacter
          src={char.src}
          id={char.id}
          criteria={char.criteria}
          crit={crit}
          inGame={inGame}
          setInGame={setInGame}
        />
      </div>
    </div>
  );
}

export default Game;
