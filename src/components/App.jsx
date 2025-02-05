import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import CharacterList from "./characters/CharacterList";
import { useEffect, useState } from "react";
import api from "../services/api";
import Filters from "./filters/Filters";


function App() {
  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState ("Gryffindor")

  useEffect(()=>{
    api(filterHouse)
    .then((data)=>{setCharacters(data)})
  }, [])

  const filterCharacter = characters
  .filter((item) => item.name.toLowerCase().includes(filterName))
  .filter((item) => filterHouse === "all" || item.house === filterHouse);

  return (
   <>
   <Routes>
    <Route path="/" element = {
      <>      
      <Filters 
      setFilterName = {setFilterName}
      setFilterHouse = {setFilterHouse}
      filterName = {filterName}
      filterHouse = {filterHouse}
      />
      <CharacterList characters = {filterCharacter} />
      </>
    }/>
   </Routes>
   </>
  )
}

export default App


