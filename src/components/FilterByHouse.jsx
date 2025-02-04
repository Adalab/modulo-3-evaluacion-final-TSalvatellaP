

function FilterByHouse({setFilterHouse}) {
  const handleSelect = (ev) =>{
    setFilterHouse (ev.target.value)
  }
  return (
    <div>
      <label htmlFor="house">Selecciona la casa:</label>
      <select name="house" id="house" onChange = {handleSelect} >
        <option value="all">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </div>
  )
}

export default FilterByHouse