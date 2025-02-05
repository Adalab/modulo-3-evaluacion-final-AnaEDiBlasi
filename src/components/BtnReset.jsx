import PropTypes from "prop-types"

function BtnReset({btnResetFilters}) {
  return (
   
    <button className="btn-link" onClick={btnResetFilters}>Reiniciar filtros</button>
  )
}


BtnReset.propTypes ={
  btnResetFilters: PropTypes.func.isRequired,
}


export default BtnReset