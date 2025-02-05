

function FilterByGender({setFilterGender, filterGender}) {

    const handleSelectGender = (ev) =>{
        setFilterGender(ev.target.value)
    }
    




  return (
    <div>
        <label className="filter-house" htmlFor="">Buscar por género</label>
        <br />
        <select value={filterGender} onChange={handleSelectGender}  className="filter-house-label" >
            <option value="">Selecciona</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
        </select>

    </div>
  )
}

export default FilterByGender