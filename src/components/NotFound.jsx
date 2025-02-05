import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div className="not-found">
      <h1>Lo sentimos, pero esta página no se ha encontrado.</h1>
      <p>Verifica la URL o regresa a la página principal.</p>
      <Link to="/" className="btn-link">Volver a inicio</Link>
    </div>
  )
}

export default NotFound