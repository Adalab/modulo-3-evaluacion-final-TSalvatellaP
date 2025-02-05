import PropTypes from "prop-types";

function FilterByName({setFilterName, filterName}) {
  const handleInput = (ev) => {
    setFilterName(ev.target.value.toLowerCase())

  }
  
  return (
    <div className="filter-container" >
      <label htmlFor="filterName">Busca por nombre:</label>
      <input className="input-filter" type="text" onChange={handleInput} value={filterName}/>
    </div>
  )
}

FilterByName.propTypes = {
  setFilterName: PropTypes.func,
  filterName: PropTypes.string
}

export default FilterByName