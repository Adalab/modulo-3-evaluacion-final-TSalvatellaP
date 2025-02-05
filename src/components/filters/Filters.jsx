import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";
import FilterByGender from "./FilterByGender";


function Filters({setFilterName, setFilterHouse, filterHouse, filterName, filterGender,setFilterGender}) {
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
      <FilterByGender 
      setFilterGender = {setFilterGender}
      filterGender = {filterGender}
      />
   </form>
  )
}
Filters.propTypes = {
  setFilterName: PropTypes.func,
  setFilterHouse: PropTypes.func,
  filterHouse: PropTypes.string,
  filterName: PropTypes.string,
  setFilterGender: PropTypes.func,
  filterGender: PropTypes.array

}

export default Filters