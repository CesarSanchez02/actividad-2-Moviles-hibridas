import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';
import PhotosPage from './pages/PhotosPage';

function App() {
  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Ruta estática */}
          <Route path="/users" element={<UsersPage />} />

          {/* Ruta dinámica */}
          <Route path="/users/:id" element={<UserDetailPage />} />

          <Route path="/photos" element={<PhotosPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;