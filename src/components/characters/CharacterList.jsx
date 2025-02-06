import CharacterCard from "./CharacterCard"
import PropTypes from "prop-types"


function CharacterList({characters}) {

  if(characters.length === 0){
    return <p> No hay resultados</p>
  }

  const charactersHtml = characters.map(character =>
     <CharacterCard key ={character.id} character={character}/> )


  
  return (
    <div className="character-list">
      {charactersHtml}
    </div>
  )
}

CharacterList.propTypes ={
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default CharacterList