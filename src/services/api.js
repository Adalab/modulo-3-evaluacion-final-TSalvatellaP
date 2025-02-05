function api (){
    return fetch(
        'https://hp-api.onrender.com/api/characters/'
    )
    .then((resp) => resp.json())
    .then((data)=>{
        //console.log(Array.isArray(data));
        const newArray = data.map((character)=>{
            const image = character.image ? character.image : 'https://placehold.co/200x300';
            return {
                id: character.id,
                name: character.name,
                species: character.species,
                image: image,
                gender: character.gender,
                house: character.house,
                alive: character.alive
            }
            
        });
        return newArray;
       
    });

}

export default api;