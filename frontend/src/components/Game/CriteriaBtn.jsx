import "./styleCriteriaBtn.scss";
import { useState } from "react";

// import ToggleColors from "./Game/ToggleColors";

function CriteriaBtn() {
  const [showColors, setShowColors] = useState(false);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  return (
    <div className="btn-wrapper">
      <div className="criteria">
        <button type="button" className="criteriaButtons">
          <img
            src="src/assets/alaric.png"
            className="imageGlasses"
            alt="illustration lunettes"
          />
        </button>

        <button
          type="button"
          className="criteriaButtons"
          id="hair"
          onClick={toggleColors}
        >
          <img
            src="src/assets/amani.png"
            alt="illustration cheveux"
            className="imageHair"
          />
        </button>
        <button type="button" className="criteriaButtons">
          <img
            src="src/assets/amani.png"
            alt="illustration chapeau"
            className="imageHat"
          />
        </button>
        <button type="button" className="criteriaButtons">
          <img
            className="imageMoustache"
            src="src/assets/avatartest.png"
            alt="illustration moustache"
          />
        </button>
      </div>
      {showColors && (
        <div className="sideNav">
          <button
            type="button"
            className="round1"
            aria-label="blond criteria"
          />
          <button type="button" className="round2" aria-label="red criteria" />
          <button
            type="button"
            className="round3"
            aria-label="brown criteria"
          />
          <button type="button" className="round4" aria-label="dark criteria" />
        </div>
      )}
    </div>
  );
}

export default CriteriaBtn;
