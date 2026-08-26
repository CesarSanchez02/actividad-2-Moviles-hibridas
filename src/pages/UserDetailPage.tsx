import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { User } from '../interface/User';
import { getUserById } from '../services/jsonPlaceholderApi';

function UserDetailPage() {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadUser = async () => {
      try {
        const data = await getUserById(id);
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id]);

  if (loading) {
    return <p className="state-message">Cargando usuario...</p>;
  }

  if (!user) {
    return <p className="state-message">Usuario no encontrado.</p>;
  }

  return (
    <section className="page-shell">
      <Link to="/users" className="button button--small">
        Volver al directorio
      </Link>

      <div className="user-card user-detail">
        <p className="eyebrow">Perfil de usuario</p>
        <h2 className="page-heading">
          {user.name}
        </h2>

        <p className="user-card__username">@{user.username}</p>

        <hr />

        <p><strong>Email</strong> {user.email}</p>
        <p><strong>Teléfono</strong> {user.phone}</p>
        <p><strong>Sitio web</strong> {user.website}</p>
      </div>
    </section>
  );
}

export default UserDetailPage;