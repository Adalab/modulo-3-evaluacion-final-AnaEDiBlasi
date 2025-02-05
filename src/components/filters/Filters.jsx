import FilterByName from "./FilterByName"
import FilterByHouse from "./FilterByHouse"
import FilterByGender from "./FilterByGender"
import PropTypes from "prop-types"



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

Filters.propTypes ={
  setFilterName: PropTypes.func.isRequired,
  setFilterHouse: PropTypes.func.isRequired,
  setFilterGender: PropTypes.func.isRequired,

  filterName: PropTypes.string.isRequired,
  filterGender: PropTypes.string.isRequired,
  filterHouse: PropTypes.string.isRequired,


};




export default Filters