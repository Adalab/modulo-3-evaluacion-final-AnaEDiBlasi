

function CharacterDetail({characterDetails}) {

  // Variables con nombres fáciles de entender
  const image = characterDetails.image;
  const name = characterDetails.name;
  const house = characterDetails.house;
  const gender = characterDetails.gender;
  const specie = characterDetails.species;
  const isAlive = characterDetails.alive; // Ya viene como "Sí" o "No" desde la API
  // const alternateNames = characterDetails.alternateName || []; // Si no hay, dejamos un array vacío

//para que cuando renderize la pagina de detail no tenga que hacer scroll hacia arriba
  window.scrollTo(0, 0);

  return (

    <article className="card-detail">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <h2>{house}</h2>
        <p>Genero: {gender}</p>
        <p>Especie: {specie}</p>
        <p>Vivo: {isAlive}</p>
         {/* si hay nombres alternativos, se muestran
          
        <ul>
           {alternateNames.map((name, index)=>{
              <li key={index}>{name}</li>
            })}
        </ul>    
        
        */}
        
        
    </article>
  )
}

export default CharacterDetail