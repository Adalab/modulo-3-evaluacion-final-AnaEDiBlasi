import CharacterCard from "./CharacterCard"


function CharacterList({characters}) {

  const charactersHtml = characters.map(character => <CharacterCard key ={character.id} character={character}/> )


  
  return (
    <div>
      {charactersHtml}
    </div>
  )
}

export default CharacterList