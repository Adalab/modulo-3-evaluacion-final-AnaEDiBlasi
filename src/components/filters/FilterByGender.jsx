import PropTypes from "prop-types"



function FilterByGender({setFilterGender, filterGender}) {

    const handleSelectGender = (ev) =>{
        setFilterGender(ev.target.value)
    }
    
  return (
    <div>
        <label className="filter-house" htmlFor="">Buscar por género</label>
        <br />
        <select value={filterGender} onChange={handleSelectGender}  className="filter-house-label" >
            <option value=""> Selecciona </option>
            <option value="Mujer"> Mujer </option>
            <option value="Hombre"> Hombre </option>
            
        </select>

    </div>
  )
}

FilterByGender.propTypes = {
  setFilterGender: PropTypes.func.isRequired,
  filterGender: PropTypes.string.isRequired

}

export default FilterByGender