import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import "../styles/App.scss";
import CharacterList from "./characters/CharacterList";
import { useEffect, useState } from "react";
import api from "../services/api";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";


function App() {
  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState ("")

  useEffect(()=>{
    api(filterHouse || "gryffindor")
    .then((data)=>{setCharacters(data)})
  }, [filterHouse])

  const filterCharacter = characters
  .filter((item) => item.name.toLowerCase().includes(filterName))
  .filter((item) => filterHouse ? item.house === filterHouse : true );
  const noResultsMessage = filterCharacter.length === 0 && filterName ? "No hay ningún personaje que coincida con la búsqueda" : "";


  const {pathname} = useLocation();
  const characterRoute = matchPath ("/character/:name/:idCharacter", pathname);
  const characterIdUrl = characterRoute ? characterRoute.params.idCharacter : null;
  const characterInfo = characters.find(item => item.id === characterIdUrl);


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
      <CharacterList characters = {filterCharacter}
      noResultsMessage = {noResultsMessage} />
      </>
    }/>
    <Route path="/character/:name/:idCharacter" element = {<CharacterDetail info = {characterInfo} />} />
   </Routes>
   </>
  )
}

export default App


