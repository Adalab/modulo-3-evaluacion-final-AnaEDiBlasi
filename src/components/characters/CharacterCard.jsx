import { Link } from "react-router-dom"
import PropTypes from "prop-types"



function CharacterCard({character}) {
  return (

    <Link to={`/character/${character.id}`}>
        <article className="card-list">
          <img src={character.image} alt="ImageCharacter" />
          <h3>{character.name}</h3>
          <h4>{character.species}</h4>
        </article>
    </Link>
  )
}

CharacterCard.propTypes ={
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired
}

export default CharacterCard