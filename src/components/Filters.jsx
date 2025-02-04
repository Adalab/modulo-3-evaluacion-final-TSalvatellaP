import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({setFilterName}) {
  const handleForme = (ev) => {
    ev.preventDefault();

  }


  return (
   <form onSubmit={handleForme} >
    <FilterByName setFilterName = {setFilterName} />
    <FilterByHouse />
    
   </form>
  )
}

export default Filters