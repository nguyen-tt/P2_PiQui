import "./styleCriteriaBtn.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import glasses from "@assets/glasses.png";
import colorPicker from "@assets/colorPicker.png";
import hat from "@assets/hat.png";
import collar from "@assets/collar.png";
import list from "../Characters/CharactersList";

function CriteriaBtn({
  crit,
  setCrit,
  setCritCounter,
  critCounter,
  tries,
  isAvatar,
}) {
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  function handleDisplayAnswer() {
    const toChange = document.querySelector(".images");
    toChange.classList.remove("notDisplayed");
    setTimeout(() => {
      toChange.classList.add("notDisplayed");
    }, 2000);
  }

  const handleCriteria = (e) => {
    setCritCounter((counter) => counter - 1);
    setCrit(e.currentTarget.value);
    e.currentTarget.classList.add("disabled");
    handleDisplayAnswer();
  };

  const compareCrit = () => {
    return list.filter((cat) => cat.criteria.includes(crit));
  };

  useEffect(() => {
    compareCrit();
  }, [crit]);

  const looseAddClass = [
    "btn-wrapper",
    (critCounter === 0 || tries === 0 || isAvatar) && "loose",
  ].join(" ");

  return (
    <div className={looseAddClass}>
      <div className="criteria">
        <button
          type="button"
          className="criteriaButtons"
          value="glasses"
          onClick={(e) => handleCriteria(e)}
        >
          <img src={glasses} alt="illustration lunettes" />
        </button>

        <button
          type="button"
          className="criteriaButtons"
          onClick={toggleColors}
        >
          <img src={colorPicker} alt="illustration choix de couleur" />
        </button>
        <button
          type="button"
          className="criteriaButtons"
          value="accessories"
          onClick={(e) => handleCriteria(e)}
        >
          <img src={hat} alt="illustration chapeau" />
        </button>
        <button
          type="button"
          className="criteriaButtons"
          value="collar"
          onClick={(e) => handleCriteria(e)}
        >
          <img src={collar} alt="illustration collier" />
        </button>
      </div>
      {showColors && (
        <div className="sideNav">
          <button
            aria-label="white"
            type="button"
            className="round1"
            value="white"
            onClick={(e) => handleCriteria(e)}
          />
          <button
            aria-label="yellow"
            type="button"
            className="round2"
            value="yellow"
            onClick={(e) => handleCriteria(e)}
          />
          <button
            aria-label="dark yellow"
            type="button"
            className="round3"
            value="dark yellow"
            onClick={(e) => handleCriteria(e)}
          />
          <button
            aria-label="orange"
            type="button"
            className="round4"
            value="orange"
            onClick={(e) => handleCriteria(e)}
          />
          <button
            aria-label="pink"
            type="button"
            className="round5"
            value="pink"
            onClick={(e) => handleCriteria(e)}
          />
          <button
            aria-label="dark red"
            type="button"
            className="round6"
            value="dark red"
            onClick={(e) => handleCriteria(e)}
          />
          <button
            aria-label="dark grey"
            type="button"
            className="round7"
            value="dark grey"
            onClick={(e) => handleCriteria(e)}
          />
        </div>
      )}
    </div>
  );
}

CriteriaBtn.propTypes = {
  crit: PropTypes.string.isRequired,
  setCrit: PropTypes.func.isRequired,
  setCritCounter: PropTypes.func.isRequired,
  critCounter: PropTypes.number.isRequired,
  tries: PropTypes.number.isRequired,
  isAvatar: PropTypes.func.isRequired,
};
export default CriteriaBtn;
