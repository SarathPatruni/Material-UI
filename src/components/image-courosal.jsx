
import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = ['/banner1.png', '/banner2.png', '/banner3.png'];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#f5f5f5',
        mt: 2,
      }}
    >
      {/* Sliding image track */}
      <Box
        sx={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.6s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <Box
            key={image}
            component="img"
            src={image}
            alt={`Promotional banner ${index + 1}`}
            sx={{
              width: '100%',
              flexShrink: 0,
              height: { xs: 180, md: 350 },
              objectFit: 'cover',
            }}
          />
        ))}
      </Box>

      {/* Previous arrow */}
      <IconButton
        aria-label="Previous banner"
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 12,
          transform: 'translateY(-50%)',
          bgcolor: '#ffffffcc',
          '&:hover': { bgcolor: '#ffffff' },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Next arrow */}
      <IconButton
        aria-label="Next banner"
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 12,
          transform: 'translateY(-50%)',
          bgcolor: '#ffffffcc',
          '&:hover': { bgcolor: '#ffffff' },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Slide indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {images.map((image, index) => (
          <Box
            key={image}
            onClick={() => setCurrentIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setCurrentIndex(index);
              }
            }}
            aria-label={`Go to banner ${index + 1}`}
            sx={{
              width: index === currentIndex ? 22 : 8,
              height: 8,
              borderRadius: 5,
              bgcolor: index === currentIndex ? '#e31837' : '#ffffff',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
