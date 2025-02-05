function api (house){
    return fetch(
        `https://hp-api.onrender.com/api/characters/house/${house}`
    )
    .then((resp) => resp.json())
    .then((data)=>{  
        const newArray = data.map((character)=>{
            return {
                id: character.id,
                name: character.name,
                species: character.species,
                image: character.image || 'https://placehold.co/200x300',
                gender: character.gender,
                house: character.house,
                alive: character.alive,
            }
            
        });
        return newArray;
       
    });

}

export default api;