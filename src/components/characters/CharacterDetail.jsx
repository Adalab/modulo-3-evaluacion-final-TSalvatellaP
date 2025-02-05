import PropTypes from "prop-types";

function CharacterDetail({info}) {
  return (
    <div>
      <img src={info.image} alt={info.name} />
      <h1>{info.name}</h1>
      <p>Estatus:
         {info.alive === true ? <i className="fa-solid fa-heart-circle-check" ></i> : <i className="fa-solid fa-heart-circle-xmark"></i>}
         </p>
      <p>Género: {info.gender}</p>
      <p>Especie: {info.species === "human" ? <i className="fa-solid fa-user"></i> : <i className="fa-brands fa-reddit-alien"></i>}</p>
      <p>Casa: {info.house}</p>
    </div>
  )
}

CharacterDetail.propTypes = {
  info: PropTypes.object

}

export default CharacterDetail