import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({info}) {
  return (
    <article>
      <Link to={`/character/${info.name}/${info.id}`}>
          <img src={info.image} alt={info.name} />
          <h1>{info.name}</h1>
          <p>{info.species}</p>
      </Link>
    </article>
  )
}

CharacterCard.propTypes = {
  info: PropTypes.object
}

export default CharacterCard