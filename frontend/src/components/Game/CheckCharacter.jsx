import PropTypes from "prop-types";

function CheckCharacter({ criteria, crit }) {
  return (
    <div className="checkChar">
      {criteria.includes(crit) ? <p>yes</p> : <p>no</p>}
    </div>
  );
}

CheckCharacter.propTypes = {
  criteria: PropTypes.isRequired,
  crit: PropTypes.string.isRequired,
};

export default CheckCharacter;
