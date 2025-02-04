

function FilterByName({setFilterName}) {
  const handleInput = (ev) => {
    setFilterName(ev.target.value.toLowerCase())

  }
  
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" onChange={handleInput} />
    </div>
  )
}

export default FilterByName