import FilterByName from "./FilterByName";
import FilterByHouse from "./FilterByHouse";
import PropTypes from "prop-types";
import FilterByGender from "./FilterByGender";
import FilterByWizard from "./FilterByWizard";
import BtnReset from "./BtnReset";


function Filters({setFilterName, setFilterHouse, filterHouse, filterName, filterGender,setFilterGender, isWizard, setIsWizard, handleReset}) {
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
      <FilterByWizard
      setIsWizard = {setIsWizard}
      isWizard = {isWizard}
      />
      <BtnReset 
      handleReset = {handleReset}
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
  filterGender: PropTypes.array,
  isWizard: PropTypes.bool,
  setIsWizard: PropTypes.func,
  handleReset: PropTypes.func,
  
}

export default Filters