import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"
import FilterByGender from "./FilterByGender"



function Filters({setFilterName, setFilterHouse, filterName, setFilterGender, filterGender, filterHouse}) {

  const handleForm = (ev) =>{

    ev.preventDefault()

  }



    
  return (
    <form  className="filters-container"onSubmit={handleForm}>

        <FilterByName setFilterName={setFilterName} filterName={filterName}/>

        <br />
        <br />

        <FilterByHouse setFilterHouse={setFilterHouse} filterHouse={filterHouse}/>

        <FilterByGender setFilterGender={setFilterGender} filterGender={filterGender}/>


    </form>
  )
}

export default Filters