import PropTypes from "prop-types";

function CharacterDetail({info}) {
  
  const getHouseImage = (house) => {
    if (house === "Gryffindor"){
      return "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyeGE0B7FFvyj9ZeSEbjQYXS1aL7_6x2fcMAVmEg1O0C0QMJEY6ctUEzTFqxFuxIpBoXnm6DVWbdo4qxExPoCp8Be9xy4_SNHbh6ZpikucaRgpUGgSJ22Fgoxeeb9ni7gV7ZWRrKBuWQ&usqp=CAc";
    } else if (house === "Slytherin") {
      return "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJHeUE2hNviuUdtY5eMkJB-QMXwPatH00ekzE2iiseifQWq1KUBNVFVIXOI6-DIbsns7sLxqOeA0UM0OXAjAgJQYnp1P4CxEQZjtMHpE0jTq_j32Yq9Q0DOQFsgAelWhr311arzydj8o4&usqp=CAc";
    } else if (house === "Ravenclaw"){
      return "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNVhkWKwpDLH2nMvVVIrKupomsAA76C_qBhIYpyT1kAhFnotttY9H4U2l9__nTtSc8D5nxUhI2PFNenq9Z2Iwq_hiQcCzLkRtCLdyRPiRRPk5r0YrPzOn6NLemSzTl0XpnS3JwsHgAcGo&usqp=CAc";
    } else if (house === "Hufflepuff"){
      return "https://media.mykaramelli.com/galeria/articulos/decoracion-de-pared-emblema-hufflepuff-harry-potter-61cm_12419_1.jpg";
    } else {
      return "/images/default.png";
    }
  }


  return (
    <div className="page_detail" >
      <div className="detail-card" >
        <h1 className="detail-h1" >{info.name}</h1>
        <img className="detail-img" src={info.image} alt={info.name} />
        <div className="detail-info" >
          <p>Estatus:
             {info.alive === true ? <i className="fa-solid fa-heart-circle-check" ></i> : <i className="fa-solid fa-heart-circle-xmark"></i>}
             </p>
          <p>Género: {info.gender}</p>
          <p>Especie: {info.species === "human" ? <i className="fa-solid fa-user"></i> : <i className="fa-brands fa-reddit-alien"></i>}</p>
          <p>Casa: {info.house}</p>
        </div>
        <img className="detail-logo" src={getHouseImage(info.house)} alt={`Escudo de ${info.house}`} />
      </div>
    </div>
  )
}

CharacterDetail.propTypes = {
  info: PropTypes.object

}

export default CharacterDetail