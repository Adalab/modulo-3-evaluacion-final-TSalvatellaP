import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types";

function CharacterList({characters}) {
    const html = characters.map (character => <CharacterCard key={character.id} info={character} /> )


  return (
    <div>
      {html}
    </div>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array
}

export default CharacterList