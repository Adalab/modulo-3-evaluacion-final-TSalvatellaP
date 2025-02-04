function api (){
    return fetch(
        'https://hp-api.onrender.com/api/characters/house/gryffindor'
    )
    .then((resp) => resp.json())
    .then((data)=>{
        //console.log(Array.isArray(data));
        const newArray = data.map((character)=>{
            return {
                id: character.id,
                name: character.name,
                species: character.species,
                image: character.image,
                gender: character.gender,
                house: character.house,
                alive: character.alive
            }
            
        });
        return newArray;
       
    });

}

export default api;