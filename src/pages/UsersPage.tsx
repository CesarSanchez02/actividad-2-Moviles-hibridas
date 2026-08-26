import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { User } from '../interface/User';
import { getUsers } from '../services/jsonPlaceholderApi';
import UserCard from '../components/UserCard';

function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <p className="state-message">Cargando usuarios...</p>;
  }

  return (
    <section className="page-shell">
      <Link to="/" className="button button--back">
        Volver al inicio
      </Link>

      <div className="page-heading">
        <p className="eyebrow">Directorio</p>
        <h2>Usuarios</h2>
        <p className="page-heading__description">Conoce a las personas y consulta sus datos de contacto.</p>
      </div>

      <div className="user-grid">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </section>
  );
}

export default UsersPage;