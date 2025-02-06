

function api(){
    return fetch("https://hp-api.onrender.com/api/characters")
    .then((resp) => resp.json())
    .then((data)=>{

        const genderMap = {
            male: "Hombre",
            female: "Mujer",
        };

        const speciesMap = {
            human: "Humano",
            werewolf: "Hombre lobo",
            ghost: "Fantasma",
            goblin: "Duende",
            "half-giant": "Medio gigante",
            centaur: "Centauro",
            "house-elf": "Elfo doméstico",
            vampire: "Vampiro",
            poltergeist: "Poltergeist",
        };

        const newArray = data.map((character) =>{

            return{

                id: character.id,
                image: character.image || "https://placehold.co/250x250?text=personaje+sin+foto",
                name: character.name,
                species: speciesMap[character.species] || character.species,
                house: character.house,
                gender: genderMap[character.gender] || character.gender,
                alive: character.alive === true ? "SI" : "NO",
                alternateNames: character.alternate_names || []

            };
        });

        return newArray;

    });
}

export default api;