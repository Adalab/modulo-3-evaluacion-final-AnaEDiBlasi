

function FilterByName({setFilterName, filterName}) {


  const handleInput =(ev) =>{
    setFilterName(ev.target.value.toLowerCase())

  }






  return (



    <div className="filter-name">
      <label className="filter-name-label" htmlFor="">Buscar por personaje</label>
      <input 
      className="filter-name-input"
      type="text" 
      value={filterName}//esto hace que al volver atras el input mantega el nombre que escribio la usuario anteriormente
      onChange={handleInput}/>
    </div>
  )
}

export default FilterByName