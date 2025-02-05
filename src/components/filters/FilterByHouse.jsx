import PropTypes from "prop-types"

function FilterByHouse({setFilterHouse, filterHouse}) {

  const handleSelect = (ev) =>{
    setFilterHouse(ev.target.value)

  }



  return (
    <div className="filter-house">
      <label className="filter-house-label" name="house" id="house"  htmlFor="">Selecciona la casa </label>
      <select value={filterHouse} onChange={handleSelect}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </div>
  )
}

FilterByHouse.propTypes = {
  setFilterHouse: PropTypes.func.isRequired,
  filterHouse: PropTypes.string.isRequired,

}


export default FilterByHouse