import { Typography } from '@mui/material';
import GamesIcon from '@mui/icons-material/Games';
import router from '../../routes/Routes';

const Branding = () => {
  return (
    <>
      <GamesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => router.navigate('/forums')}
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          cursor: 'pointer',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        CHIZEK
      </Typography>
    </>
  );
};

export default Branding;
