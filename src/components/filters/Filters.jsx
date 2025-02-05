import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"


function Filters({setFilterName, setFilterHouse, filterName}) {

  const handleForm = (ev) =>{

    ev.preventDefault()

  }



    
  return (
    <form  className="filters-container"onSubmit={handleForm}>

        <FilterByName setFilterName={setFilterName} filterName={filterName}/>

        <br />
        <br />

        <FilterByHouse setFilterHouse={setFilterHouse}/>


    </form>
  )
}

export default Filters