import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import CharacterList from "./CharacterList";
import { useEffect, useState } from "react";
import api from "../services/api";


function App() {
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    api().then((data)=>{setCharacters(data)})
  }, [])


  return (
   <>
   <Routes>
    <Route path="/" element = {<CharacterList characters={characters} />}/>
   </Routes>
   </>
  )
}

export default App


