import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Photo } from '../interface/Photo';
import { getPhotos } from '../services/jsonPlaceholderApi';
import PhotoCard from '../components/PhotoCard';
import Pagination from '../components/Pagination';

function PhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const photosPerPage = 12;

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await getPhotos();
        setPhotos(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadPhotos();
  }, []);

  const lastPhotoIndex = currentPage * photosPerPage;
  const firstPhotoIndex = lastPhotoIndex - photosPerPage;

  const currentPhotos = photos.slice(
    firstPhotoIndex,
    lastPhotoIndex
  );

  const totalPages = Math.ceil(
    photos.length / photosPerPage
  );

  return (
    <section className="page-shell">
      <Link to="/" className="button button--back">
        Volver al inicio
      </Link>

      <div className="page-heading">
        <p className="eyebrow">Colección visual</p>
        <h2>Galería de fotos</h2>
        <p className="page-heading__description">Explora una selección de fotografías organizadas por páginas.</p>
      </div>

      <div className="photo-grid">
        {currentPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}

export default PhotosPage;