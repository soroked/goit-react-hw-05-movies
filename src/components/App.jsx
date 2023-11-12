import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout/Layout';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

// 1. стилізувати активне посилання через css modules
// 2. MovieDetails setUserScore Ідея зробити новий useEffect який залежатиме від movie для визначення userScore та genres

export const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
