import PropTypes from "prop-types";

function GetCharacters({ imgSrc, key }) {
  // useEffect(() => {
  //   const fetchImage = async () => {
  //     const res = await fetch(imgSrc);
  //     const imageBlob = await res.blob();
  //     const imageObjectURL = URL.createObjectURL(imageBlob);
  //     setImg(imageObjectURL);
  //   }}, []);

  return <img src={imgSrc} alt="icons" key={key} />;
}

GetCharacters.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default GetCharacters;
