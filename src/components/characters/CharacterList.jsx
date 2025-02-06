import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types";

function CharacterList({characters}) {
   
  return (
    <div className="list" >
    {characters && characters.length > 0 
      ?(characters.map ((character) => (
        <CharacterCard key={character.id} info={character} />))
        )
      :(<p className="message-error"> No hay ningún personaje que coincida con la búsqueda</p>)
    }
    </div>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  }

export default CharacterList