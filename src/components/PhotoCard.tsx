import type { Photo } from '../interface/Photo';

interface PhotoCardProps {
  photo: Photo;
}

function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <article className="photo-card">
      <img
        src={`https://picsum.photos/seed/json-explorer-${photo.id}/480/320`}
        alt={photo.title}
        className="photo-card__image"
        onError={(event) => {
          event.currentTarget.style.display = 'none';
        }}
      />

      <p className="photo-card__title">
        {photo.title}
      </p>
    </article>
  );
}

export default PhotoCard;