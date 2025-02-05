

function FilterByName({setFilterName, filterName}) {


  const handleInput =(ev) =>{
    setFilterName(ev.target.value.toLowerCase())

  }






  return (



    <div>
      <label htmlFor="">Busca por personaje:</label>
      <input 
      type="text" 
      value={filterName}//esto hace que al volver atras el input mantega el nombre que escribio la usuario anteriormente
      onChange={handleInput}/>
    </div>
  )
}

export default FilterByName