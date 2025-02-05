import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({setFilterName, setFilterHouse}) {
  const handleForm = (ev) => {
    ev.preventDefault();

  }


  return (
   <form onSubmit={handleForm} >
    <FilterByName setFilterName = {setFilterName} />
    <FilterByHouse setFilterHouse = {setFilterHouse}/>
   </form>
  )
}

export default Filters