import { useState, useEffect } from "react";
import axios from "axios";

function DisplayCharacters() {
  const [character, setCharacter] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.dicebear.com/6.x/avataaars/svg?size=96&&accessories=kurt,prescription02,round,sunglasses&&accessoriesProbability=15&&eyebrows=default,defaultNatural,raisedExcitedNatural,raisedExcited&&eyes=default,happy,side,squint,wink&&facialHair=beardLight,moustacheMagnum&&facialHairProbability=5&&hairColor=e8e1e1,b58143,4a312c,c93305&&mouth=default,smile,twinkle,serious,tongue&&skinColor=614335,ae5d29,d08b5b,edb98a&&top=bigHair,bob,curly,curvy,fro,froBand,hat,longButNotTooLong,shortFlat,shortWaved,straight02,turban,winterHat04,winterHat1&&topProbability=80`
      )
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: character }}
      style={{ width: "7vw", height: "15vh" }}
    />
  );
}

export default DisplayCharacters;
