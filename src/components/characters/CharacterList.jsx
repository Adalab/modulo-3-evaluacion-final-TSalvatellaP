import CharacterCard from "./CharacterCard"

function CharacterList({characters}) {
    const html = characters.map (character => <CharacterCard key={character.id} info={character} /> )


  return (
    <div>
      {html}
    </div>
  )
}

export default CharacterList