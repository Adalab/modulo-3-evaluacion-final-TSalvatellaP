import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>¡Ups! Página no encontrada (404)</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;