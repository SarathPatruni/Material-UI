import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: '#fff',
        color: '#222',
        borderBottom: '1px solid #eee',
      }}
    >
      <Toolbar sx={{ minHeight: '64px !important', px: { xs: 2, md: 5 }, gap: 2 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 23,
            letterSpacing: '-1px',
            whiteSpace: 'nowrap',
          }}
        >
          book
          <Box component="span" sx={{ bgcolor: '#e31837', color: '#fff', px: '2px' }}>
            my
          </Box>
          show
        </Typography>

        <TextField
          fullWidth
          size="small"
          placeholder="Search for Movies, Events, Plays, Sports and Activities"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              height: 36,
              borderRadius: '5px',
              fontSize: 14,
            },
          }}
        />

        <Button
          color="inherit"
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ textTransform: 'none', whiteSpace: 'nowrap' }}
        >
          Vizianagaram
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: '#e94861',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': { bgcolor: '#d73750', boxShadow: 'none' },
          }}
        >
          Sign in
        </Button>

        <IconButton aria-label="Open menu" sx={{ color: '#d72828' }}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
