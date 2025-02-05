

function FilterByHouse({setFilterHouse}) {

  const handleSelect = (ev) =>{
    setFilterHouse(ev.target.value)

  }



  return (
    <div>
      <label htmlFor="">Selecciona la casa: </label>
      <select name="" id="" onChange={handleSelect}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </div>
  )
}

export default FilterByHouse