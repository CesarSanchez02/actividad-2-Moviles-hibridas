import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          JSON Explorer
        </Link>

        <div className="navbar__links">
          <Link to="/" className="navbar__link">Inicio</Link>
          <Link to="/users" className="navbar__link">Usuarios</Link>
          <Link to="/photos" className="navbar__link">Fotos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;