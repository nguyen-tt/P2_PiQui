import "../components/rules.scss";
import catRules from "@assets/cat_rules.png";
import { useState } from "react";

const rulesPages = [
  {
    message: "Bienvenue sur PiQui !",
  },
  {
    message:
      "Dans PiQui le but est de trouver un personnage mystère choisi au hasard, avant de ne plus avoir le droit de poser des questions !",
  },
  {
    message: `Pour ça, tu vas pouvoir cliquer sur différents critères dans la barre des critères à gauche des personnages. Par exemple:"est-ce que le personnage que je dois deviner porte un chapeau ?" Je vais cliquer sur le critère chapeau pour avoir ma réponse
    !`,
  },
  {
    message:
      "Une fois ton critère choisi, des personnages vont se griser. Cela t'indique qu'ils ne correspondent pas au personnage que tu dois deviner. Le but est d'éliminer le plus de profils avec le moins de coups possibles !",
  },
  {
    message:
      "Si ton compteur de questions arrive à zéro, tu peux cliquer sur l'un des personnages pour vérifier si c'est le personnage mystère. Et si tu es sûr(e) de toi, tu n'es même pas obligé(e) d'attendre !",
  },
  {
    message: "Prêt(e) à relever le défi ?",
  },
];

export default function Rules() {
  const [textIndex, setTextIndex] = useState(0);

  const textPrevious = () => {
    setTextIndex(textIndex - 1);
  };
  const textNext = () => {
    setTextIndex(textIndex + 1);
  };

  return (
    <div className="centering">
      <div className="container-bubble">
        <div className="bubble-content">
          <p>{rulesPages[textIndex].message}</p>
          <div className="buttons">
            {textIndex > 0 && (
              <button
                type="button"
                aria-label="preBtn"
                className="previousBtn"
                onClick={textPrevious}
              />
            )}
            {textIndex < rulesPages.length - 1 && (
              <button
                type="button"
                aria-label="nexBtn"
                className="nextBtn"
                onClick={textNext}
              />
            )}
          </div>
        </div>
        <img className="cat-img" src={catRules} alt="cat img" />
      </div>
    </div>
  );
}
