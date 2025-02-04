

function CharacterCard({info}) {
  return (
    <article>
      <img src={info.image} alt={info.name} />
      <h1>{info.name}</h1>
      <p>{info.species}</p>
    </article>
  )
}

export default CharacterCard