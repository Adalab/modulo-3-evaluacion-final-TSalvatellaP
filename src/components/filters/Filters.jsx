import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";


function Filters({setFilterName, setFilterHouse, filterHouse, filterName }) {
  const handleForm = (ev) => {
    ev.preventDefault();

  }


  return (
   <form onSubmit={handleForm} >
      <FilterByName 
      setFilterName = {setFilterName} 
      filterName = {filterName} 
      />
      <FilterByHouse 
      setFilterHouse = {setFilterHouse} 
      filterHouse = {filterHouse} 
      />
   </form>
  )
}
Filters.propTypes = {
  setFilterName: PropTypes.func,
  setFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string,
  filterName: PropTypes.string
}

export default Filters