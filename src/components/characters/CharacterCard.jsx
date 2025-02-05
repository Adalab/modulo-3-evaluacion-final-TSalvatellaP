import PropTypes from "prop-types";

function CharacterCard({info}) {
  return (
    <article>
      <img src={info.image} alt={info.name} />
      <h1>{info.name}</h1>
      <p>{info.species}</p>
    </article>
  )
}

CharacterCard.propTypes = {
  info: PropTypes.object
}

export default CharacterCard