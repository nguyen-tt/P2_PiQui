import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function GetCharacters({ imgSrc, key }) {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imgSrc);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return <img src={img} alt="icons" key={key} />;
}

GetCharacters.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default GetCharacters;
