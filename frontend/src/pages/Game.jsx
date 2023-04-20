import { useState, useEffect } from "react";
import list from "@components/Characters/CharactersList";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game() {
  const [char, setChar] = useState({});
  const [isAvatar, setIsAvatar] = useState(false);

  const handleRandomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    setChar(choosenOne);
    setIsAvatar(false);
  };
  function handleClick(identifier) {
    setIsAvatar(identifier === char.id);
  }

  useEffect(() => {
    handleRandomCharSelect();
  }, []);

  return (
    <div className="GamePage">
      <div className="leftSide">
        <div className="charactersContainer">
          {list.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <img src={item.src} alt="cat" />
            </button>
          ))}
        </div>
        <CriteriaBtn />
      </div>

      <div className="rightSide">
        <img src={char.src} alt="random cat" />
        <button type="button" onClick={handleRandomCharSelect}>
          generate random cat to guess
        </button>
        <p>Did i pick the right avatar ?</p>
        <p>{isAvatar.toString()}</p>
      </div>
    </div>
  );
}

export default Game;
