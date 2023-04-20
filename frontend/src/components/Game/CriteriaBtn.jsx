import "./styleCriteriaBtn.scss";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import list from "../Characters/CharactersList";

function CriteriaBtn({ crit, setCrit }) {
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const handleCriteria = (e) => {
    setCrit(e.target.value);
  };
  const compareCrit = () => {
    return list.filter((cat) => cat.criteria.includes(crit));
  };

  useEffect(() => {
    compareCrit();
  }, [crit]);
  return (
    <div className="btn-wrapper">
      <div className="criteria">
        <button
          type="button"
          className="criteriaButtons"
          id="criteriaGlasses"
          value="glasses"
          onClick={handleCriteria}
        >
          <img
            src="src/assets/glasses.png"
            className="imageGlasses"
            alt="illustration lunettes"
          />
        </button>

        <button
          type="button"
          className="criteriaButtons"
          onClick={toggleColors}
          id="criteriaFurColor"
        >
          <img
            src="src/assets/colorPicker.png"
            alt="illustration choix de couleur"
            className="imageColorPicker"
          />
        </button>
        <button
          type="button"
          className="criteriaButtons"
          id="criteriaHeadAccessories"
          value="accessories"
          onClick={handleCriteria}
        >
          <img
            src="src/assets/hat.png"
            alt="illustration chapeau"
            className="imageHat"
          />
        </button>
        <button
          type="button"
          className="criteriaButtons"
          id="criteriaCollar"
          value="collar"
          onClick={handleCriteria}
        >
          <img
            className="imageCollar"
            src="src/assets/collar.png"
            alt="illustration collier"
          />
        </button>
      </div>
      {showColors && (
        <div className="sideNav">
          <button
            type="button"
            className="round1"
            aria-label="white fur"
            id="whiteFurCriteria"
            value="white"
            onClick={handleCriteria}
          />
          <button
            type="button"
            className="round2"
            aria-label="yellow fur"
            id="yellowFurCriteria"
            value="yellow"
            onClick={handleCriteria}
          />
          <button
            type="button"
            className="round3"
            aria-label="dark yellow fur"
            id="darkyellowFurCriteria"
            value="dark yellow"
            onClick={handleCriteria}
          />
          <button
            type="button"
            className="round4"
            aria-label="orange fur"
            id="orangeFurCriteria"
            value="orange"
            onClick={handleCriteria}
          />
          <button
            type="button"
            className="round5"
            aria-label="pink fur"
            id="pinkFurCriteria"
            value="pink"
            onClick={handleCriteria}
          />
          <button
            type="button"
            className="round6"
            aria-label="dark red fur"
            id="darkRedFurCriteria"
            value="dark red"
            onClick={handleCriteria}
          />
          <button
            type="button"
            className="round7"
            aria-label="grey fur"
            id="greyFurCriteria"
            value="dark grey"
            onClick={handleCriteria}
          />
        </div>
      )}
    </div>
  );
}

CriteriaBtn.propTypes = {
  crit: PropTypes.string.isRequired,
  setCrit: PropTypes.func.isRequired,
};
export default CriteriaBtn;
