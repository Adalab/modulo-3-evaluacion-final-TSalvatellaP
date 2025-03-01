import PropTypes from "prop-types";
import castle from "/src/images/castle_9851094.png";
import Gryffindor from "/src/images/griffindor.jpg";
import Hufflepuff from "/src/images/hufflepuff.jpg";
import Ravenclaw from "/src/images/ravenclaw.jpg";
import Slytherin from "/src/images/slytherin.jpg";
import { Link } from 'react-router-dom';

function CharacterDetail({info}) {
  
  const getHouseImage = (house) => {
    if (house === "Gryffindor"){
      return Gryffindor;
    } else if (house === "Slytherin") {
      return Slytherin;
    } else if (house === "Ravenclaw"){
      return Ravenclaw;
    } else if (house === "Hufflepuff"){
      return Hufflepuff;
    } else {
      return castle;
    }
  }

  return (
    <>
   
    {info ? (
     <div className="page_detail" >
      <div className="detail-card" >
        <h1 className="detail-h1" >{info.name}</h1>
        <img className="detail-img" src={info.image} alt={info.name} />
        <div className="detail-info" >
          <p>Estatus:
             {info.alive === true 
             ? <i className="fa-solid fa-heart-circle-check" ></i> 
             : <i className="fa-solid fa-heart-circle-xmark"></i>
             }
          </p>
          <p>Género: {info.gender}</p>
          <p>Especie: 
            {info.species === "human" 
            ? <i className="fa-solid fa-user"></i> 
            : <i className="fa-brands fa-reddit-alien"></i>
            }
          </p>
          <p>Casa: {info.house}</p>
        </div>
        {info.house &&
        (<img className="detail-logo" src={getHouseImage(info.house)} alt={`Escudo de ${info.house}`} />
          )}
      </div>
     </div>
      
      ) : (
      <div className="error-container" >
        <p className="message-error">No hay ningún personaje que coincida con la búsqueda</p>
      </div>)
    }
     
    
    <Link to="/"><button className="detail-btn" >Volver al inicio</button></Link> 
    </>
  )
}

CharacterDetail.propTypes = {
  info: PropTypes.object,
 }

export default CharacterDetail