import PropTypes from "prop-types";
import "./CheckCharacters.scss";
import { useEffect } from "react";

function CheckCharacter({
  criteria,
  crit,
  inGame,
  setInGame,
  // outGame,
  setOutGame,
}) {
  // props: criteria is array criteria of mistery cat
  // crit is the criteria selected with the button
  // const cats = document.querySelectorAll(".cats");

  function filtering() {
    if (criteria.includes(crit)) {
      setInGame(inGame.filter((item) => item.criteria.includes(crit)));
      setOutGame(inGame.filter((item) => !item.criteria.includes(crit)));
    } else {
      setInGame(inGame.filter((item) => !item.criteria.includes(crit)));
      setOutGame(inGame.filter((item) => item.criteria.includes(crit)));
    }
  }

  useEffect(() => {
    if (criteria) {
      filtering();
      // if (outGame) {
      //   // if criteria clicked is true then outGame is empty
      //   const result = outGame.filter((item) =>
      //     cats.some((cat) => item.id === parseInt(cat.key, 10))
      //   );
      //   result.map((btn) => btn.classList.add("outGame"));
      // }
    }
  }, [crit]);

  return (
    <div className="checkChar">
      {criteria && criteria.includes(crit) ? (
        <img
          src="src/assets/yes-png.jpg"
          alt="le personnage mystère a bien ce critère"
        />
      ) : (
        <img
          src="src/assets/no-png.jpg"
          alt="le personnage mystère n'a pas ce critère"
        />
      )}
    </div>
  );
}

CheckCharacter.propTypes = {
  criteria: PropTypes.isRequired,
  crit: PropTypes.string.isRequired,
  inGame: PropTypes.isRequired,
  setInGame: PropTypes.func.isRequired,
  // outGame: PropTypes.isRequired,
  setOutGame: PropTypes.func.isRequired,
};

export default CheckCharacter;
