import imageCard from "../images/v743-tang-10.jpg";
function api (house){
    const url =
        house === "all"
            ? "https://hp-api.onrender.com/api/characters"
            : `https://hp-api.onrender.com/api/characters/house/${house}`;
    return fetch(url)
    .then((resp) => resp.json())
    .then((data)=>{  
        const newArray = data.map((character)=>{
            return {
                id: character.id,
                name: character.name,
                species: character.species,
                image: character.image || imageCard,
                gender: character.gender,
                house: character.house || "Sin casa",
                alive: character.alive,
                wizard: character.wizard,
            }
            
        });
        return newArray;
       
    });

}

export default api;