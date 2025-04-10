import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ForumList from '../components/forum-list/ForumList';

const Forums = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 3 }}>
        <ForumList />
      </Grid>
      <Grid size={{ md: 9 }}>
        <Box display="flex" height="100vh">
          <h1>Welcome to the Forum</h1>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Forums;
