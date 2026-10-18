import { Box, Button } from '@mui/material';

const leftLinks = ['Movies', 'Stream', 'Events', 'Plays', 'Sports', 'Activities'];
const rightLinks = ['ListYourShow', 'Corporates', 'Offers', 'Gift Cards'];

export default function SecondaryNavbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        minHeight: 40,
        px: { xs: 2, md: 5 },
      }}
    >
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {leftLinks.map((item) => (
          <Button
            key={item}
            color="inherit"
            sx={{ textTransform: 'none', color: '#333', fontSize: 14 }}
          >
            {item}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {rightLinks.map((item) => (
          <Button
            key={item}
            color="inherit"
            sx={{ textTransform: 'none', color: '#333', fontSize: 12 }}
          >
            {item}
          </Button>
        ))}
      </Box>
    </Box>
  );
}
