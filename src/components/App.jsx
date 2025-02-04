import { Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import CharacterList from "./CharacterList";


function App() {
  return (
   <>
   <Routes>
    <Route path="/" element = {<CharacterList />}/>
   </Routes>
   </>
  )
}

export default App
