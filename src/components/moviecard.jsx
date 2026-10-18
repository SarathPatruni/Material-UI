import { Box, Card, CardMedia, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function MovieCard({ movie }) {
  return (
    <Box sx={{ minWidth: 0 }}>
      <Card
        sx={{
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 'none',
          bgcolor: '#000',
        }}
      >
        <CardMedia
          component="img"
          image={movie.image}
          alt={movie.title}
          sx={{
            width: '100%',
            aspectRatio: '2 / 3',
            objectFit: 'cover',
          }}
        />

        {movie.promoted && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bgcolor: '#e9435b',
              color: '#fff',
              px: 1,
              py: 0.4,
              fontSize: 12,
              borderRadius: '0 0 0 5px',
            }}
          >
            PROMOTED
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            p: 1,
            color: '#fff',
            bgcolor: '#000',
          }}
        >
          {movie.likes ? (
            <ThumbUpIcon sx={{ color: '#21a45b', fontSize: 18 }} />
          ) : (
            <StarIcon sx={{ color: '#e9435b', fontSize: 18 }} />
          )}

          <Typography variant="body2" sx={{ fontSize: 13, whiteSpace: 'nowrap' }}>
            {movie.likes ? movie.likes : `${movie.rating}/10  ${movie.votes}`}
          </Typography>
        </Box>
      </Card>

      <Typography sx={{ mt: 1, fontWeight: 500, fontSize: 16 }}>
        {movie.title}
      </Typography>

      <Typography sx={{ mt: 0.5, color: '#777', fontSize: 14 }}>
        {movie.genre}
      </Typography>
    </Box>
  );
}
