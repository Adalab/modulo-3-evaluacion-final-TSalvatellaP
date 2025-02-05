import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types";

function CharacterList({characters, noResultsMessage}) {
    const html = characters.map (character => <CharacterCard key={character.id} info={character} /> )


  return (
    <div className="list" >
      {html}
      {noResultsMessage}
    </div>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  noResultsMessage: PropTypes.string
}

export default CharacterList