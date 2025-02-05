import { Link } from "react-router-dom"




function CharacterCard({character}) {
  return (

    <Link to={`/character/${character.id}`}>
        <article>
          <img src={character.image} alt="ImageCharacter" />
          <h3>{character.name}</h3>
          <h4>{character.species}</h4>
        </article>
    </Link>
  )
}

export default CharacterCard