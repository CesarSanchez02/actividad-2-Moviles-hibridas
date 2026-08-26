import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page__intro">
        <p className="eyebrow">Datos públicos, a simple vista</p>
        <h1>
          JSON Explorer
        </h1>

        <p className="home-page__lead">
          Explora usuarios y fotografías utilizando la API de JSONPlaceholder.
        </p>

      </div>

      <div className="home-links">
          <Link
            to="/users"
            className="home-link"
          >

            <h2>
              Usuarios
            </h2>

            <p>
              Explora la información de los usuarios.
            </p>
          </Link>

          <Link
            to="/photos"
            className="home-link"
          >

            <h2>
              Fotos
            </h2>

            <p>
              Explora la galería de fotografías.
            </p>
          </Link>

      </div>
    </section>
  );
}

export default HomePage;