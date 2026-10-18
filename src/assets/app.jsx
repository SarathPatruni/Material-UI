
import { Box } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import SecondaryNavbar from '../components/SecondaryNavbar.jsx';
import ImageCarousel from '../components/image-courosal.jsx';
import RecommendedMovies from '../components/RecommendedMovies.jsx';


export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fff' }}>
      <Navbar />
      <SecondaryNavbar />
      <ImageCarousel />
      <RecommendedMovies />
    </Box>
  );
}