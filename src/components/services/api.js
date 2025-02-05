

function api(){
    return fetch("https://hp-api.onrender.com/api/characters")
    .then((resp) => resp.json())
    .then((data)=>{

        const newArray = data.map((character) =>{

            return{

                id: character.id,
                image: character.image || "https://placehold.co/250x250?text=personaje+sin+foto",
                name: character.name,
                species: character.species,
                house: character.house,
                gender: character.gender,
                alive: character.alive === true ? "SI" : "NO",
                alternateName: character.alternate_names || []

            };
        });

        return newArray;

    });
}

export default api;