import PropTypes from "prop-types";

function FilterByName({setFilterName, filterName}) {
  const handleInput = (ev) => {
    setFilterName(ev.target.value.toLowerCase())

  }
  
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" onChange={handleInput} value={filterName}/>
    </div>
  )
}

FilterByName.propTypes = {
  setFilterName: PropTypes.func,
  filterName: PropTypes.string
}

export default FilterByName