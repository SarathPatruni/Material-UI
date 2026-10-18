import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MovieCard from './moviecard.jsx';

const movies = [
  {
    id: 1,
    title: 'Dude',
    genre: 'Romantic/Love Story',
    image: '/dude.png',
    promoted: true,
    rating: '10',
    votes: '1.2B+ Votes',
  },
  {
    id: 2,
    title: 'Saalar',
    genre: 'Action/Thriller',
    image: '/salaar.png',
    promoted: true,
    rating: '9.2',
    votes: '3.2K+ Votes',
  },
  {
    id: 3,
    title: 'Jailer 2',
    genre: 'Action/Thriller',
    image: '/jailer2.png',
    promoted: false,
    likes: '339K+ Likes',
  },
  {
    id: 4,
    title: 'Ranabaali',
    genre: 'Action/Drama/Period',
    image: '/ranabali.png',
    promoted: false,
    likes: '127K+ Likes',
  },
  {
    id: 5,
    title: 'Comrade Kalyan',
    genre: 'Comedy/Period/Romantic',
    image: '/comrade.png',
    promoted: false,
    rating: '8.9',
    votes: '12.5K+ Votes',
  },
  {
    id: 6,
    title: 'Garividi Laxmi',
    genre: 'Action/Drama',
    image: '/garividi.png',
    promoted: false,
    rating: '8.1',
    votes: '4K+ Votes',
  },
  {
    id: 7,
    title: 'Street Fighter',
    genre: 'Comedy/Drama',
    image: '/streetfighter.png',
    promoted: false,
    likes: '50K+ Likes',
  },
  {
    id: 8,
    title: 'Drushyam ',
    genre: 'Thriller',
    image: '/drushyam.png',
    promoted: false,
    rating: '7.8',
    votes: '2K+ Votes',
  },
  {
    id: 9,
    title: 'Movie Nine',
    genre: 'Action/Thriller',
    image: '/jailer2.png',
    promoted: false,
    likes: '25K+ Likes',
  },
  {
    id: 10,
    title: 'Movie Ten',
    genre: 'Drama/Romance',
    image: '/jailer2.png',
    promoted: false,
    rating: '8.4',
    votes: '6K+ Votes',
  },
];

export default function RecommendedMovies() {
  const [page, setPage] = useState(0);

  const moviesPerPage = 5;
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const startIndex = page * moviesPerPage;
  const visibleMovies = movies.slice(
    startIndex,
    startIndex + moviesPerPage,
  );

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 3, bgcolor: '#f1f5f9' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Recommended Movies
        </Typography>

        <Typography sx={{ color: '#e31837', cursor: 'pointer' }}>
          See All ›
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(3, minmax(0, 1fr))',
              md: 'repeat(5, minmax(0, 1fr))',
            },
            gap: 2,
          }}
        >
          {visibleMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Box>

        {page > 0 && (
          <IconButton
            aria-label="Previous movies"
            onClick={() => setPage((current) => current - 1)}
            sx={{
              position: 'absolute',
              left: -16,
              top: '40%',
              bgcolor: '#fff',
              boxShadow: 2,
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}

        {page < totalPages - 1 && (
          <IconButton
            aria-label="Next movies"
            onClick={() => setPage((current) => current + 1)}
            sx={{
              position: 'absolute',
              right: -16,
              top: '40%',
              bgcolor: '#fff',
              boxShadow: 2,
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      </Box>

      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
        Showing {startIndex + 1}–
        {Math.min(startIndex + moviesPerPage, movies.length)} of {movies.length} movies
      </Typography>
    </Box>
  );
}