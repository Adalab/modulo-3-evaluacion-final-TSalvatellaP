import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>¡Ups! Página no encontrada (404)</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/"><button className="detail-btn" >Volver al inicio</button></Link> 
    </div>
  );
}

export default NotFound;