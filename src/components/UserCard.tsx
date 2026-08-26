import { Link } from 'react-router-dom';
import type { User } from '../interface/User';

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <article className="user-card">
      <h3 className="user-card__name">
        {user.name}
      </h3>

      <p className="user-card__username">
        @{user.username}
      </p>

      <p className="user-card__email">
        {user.email}
      </p>

      <Link
        to={`/users/${user.id}`}
        className="button button--small"
      >
        Ver detalle
      </Link>
    </article>
  );
}

export default UserCard;