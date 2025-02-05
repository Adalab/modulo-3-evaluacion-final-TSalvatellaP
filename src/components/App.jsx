import { matchPath, Route, Routes, useLocation,} from "react-router-dom";
import "../styles/App.scss";
import CharacterList from "./characters/CharacterList";
import { useEffect, useState } from "react";
import api from "../services/api";
import Filters from "./filters/Filters";
import CharacterDetail from "./characters/CharacterDetail";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  const [characters, setCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState ("Gryffindor")
  const [filterGender, setFilterGender] = useState ([])
  const [isWizard, setIsWizard] = useState (false)
 
  useEffect(()=>{
    api(filterHouse)
    .then((data)=>{
      setCharacters(data);
    })
  }, [filterHouse])

  const filterCharacter = characters
  .filter((item) => item.name.toLowerCase().includes(filterName))
  .filter((item) => filterHouse === "all" || item.house === filterHouse)
  .sort((a, b) => a.name.localeCompare(b.name))
  .filter((item) => filterGender.length > 0 ? filterGender.includes(item.gender) : true)
  .filter((item) => isWizard ? item.wizard : true);
  
  const noResultsMessage = filterCharacter.length === 0 && filterName ? "No hay ningún personaje que coincida con la búsqueda" : "";


  const {pathname} = useLocation();
  const characterRoute = matchPath ("/character/:name/:idCharacter", pathname);
  const characterIdUrl = characterRoute ? characterRoute.params.idCharacter : null;
  const characterInfo = characters.find(item => item.id === characterIdUrl);

  const handleReset = () => {
    setFilterName("");
    setFilterHouse("all"); 
    setFilterGender([]);
    setIsWizard(false);
  };


  return (
  <>
  <Header/>
  <div className="page_main" >
       <Routes>
        <Route path="/" element = {
          <>
          <Filters
          setFilterName = {setFilterName}
          setFilterHouse = {setFilterHouse}
          filterName = {filterName}
          filterHouse = {filterHouse}
          setFilterGender = {setFilterGender}
          filterGender = {filterGender}
          setIsWizard = {setIsWizard}
          isWizard = {isWizard}
          handleReset = {handleReset}
          />
       
          <CharacterList
          characters = {filterCharacter}
          noResultsMessage = {noResultsMessage}
          />
          </>
       
        }/>
        <Route path="/character/:name/:idCharacter" element = {<CharacterDetail info = {characterInfo} />} />
        <Route path="*" element = {<NotFound/>}/>
       </Routes>
  </div>
  <Footer />
  </>
  )
}

export default App


