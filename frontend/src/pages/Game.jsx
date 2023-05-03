import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import useSound from "use-sound";
import mp3File from "@assets/cat-meow-14536.mp3";
import list from "../components/Characters/CharactersList";
import CheckCharacter from "../components/Game/CheckCharacter";
import "../components/Characters/Game.scss";
import CriteriaBtn from "../components/Game/CriteriaBtn";

function Game({ setWins, wins, regiteredPseudo }) {
  const [char, setChar] = useState({});
  const [isAvatar, setIsAvatar] = useState(false);
  const [crit, setCrit] = useState("");
  const [inGame, setInGame] = useState(list);
  const [tries, setTries] = useState(3);
  const [critCounter, setCritCounter] = useState(5);

  const disabled = document.querySelectorAll(".disabled");

  const handleRandomCharSelect = () => {
    const choosenId = Math.floor(Math.random() * 32);
    const choosenOne = list.find((cat) => cat.id === choosenId);
    setChar(choosenOne);
    setIsAvatar(false);
  };

  const handleClick = (e, item) => {
    setTries((counter) => counter - 1);
    setIsAvatar(item.id === char.id);
    return [
      !isAvatar && e.currentTarget.classList.add("disabled"),
      item.id === char.id && setWins((win) => win + 1),
    ];
  };

  useEffect(() => {
    axios.patch(`${import.meta.env.VITE_BACKEND_URL}/win`, {
      wins,
      regiteredPseudo,
    });
  }, [wins]);

  useEffect(() => {
    handleRandomCharSelect();
  }, []);

  // fonction bouton replay//
  function launchNewGame() {
    setCritCounter(5);
    setTries(3);
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

  const classSwitch = ["cats", (tries === 0 || isAvatar) && "disabled"].join(
    " "
  );

  const conditionnalydispolayAnswer = () => {
    if (tries > 0) {
      return tries;
    }
    if (isAvatar) {
      return "c'était moins une!";
    }
    return "C'est perdu. Dommage!";
  };

  const [play] = useSound(mp3File);

  return (
    <div className="GamePage">
      <div className="background" />
      <div className="leftSide">
        <div className="charactersContainer">
          {list.map((item) => (
            <button
              type="button"
              key={item.id}
              id={item.id}
              className={classSwitch}
              onClick={(e) => handleClick(e, item)}
            >
              <img src={item.src} alt="cat" />
            </button>
          ))}
        </div>
        <CriteriaBtn
          crit={crit}
          setCrit={setCrit}
          critCounter={critCounter}
          setCritCounter={setCritCounter}
          tries={tries}
          isAvatar={isAvatar}
        />
      </div>

      <div className="rightSide">
        <figure>
          <img
            src={isAvatar ? char.src : "https://robohash.org/Alaric?set=set4"}
            alt="random cat"
            className={isAvatar ? "winner" : "guess"}
          />
          <figcaption>
            {isAvatar ? "C'est lui!" : "Devine le chat mystère!"}
          </figcaption>
        </figure>
        <p>
          essai restant:
          {conditionnalydispolayAnswer()}
        </p>
        <p>critères restant: {critCounter}</p>
        <CheckCharacter
          src={char && char.src}
          id={char && char.id}
          criteria={char && char.criteria}
          crit={crit}
          inGame={inGame}
          setInGame={setInGame}
        />
        {(isAvatar || tries <= 0) && (
          <div>
            {isAvatar ? <p>Bravo</p> : <p>Dommage</p>}
            <button id="replay" type="button" onClick={launchNewGame}>
              <button type="submit" onClick={play}>
                Rejouer
              </button>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Game.propTypes = {
  wins: PropTypes.number.isRequired,
  setWins: PropTypes.func.isRequired,
  regiteredPseudo: PropTypes.string.isRequired,
};

export default Game;
