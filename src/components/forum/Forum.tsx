import { useParams } from 'react-router-dom';
import { useGetForum } from '../../hooks/useGetForum';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ForumList from '../forum-list/ForumList';

const Forum = () => {
  const params = useParams();
  const { data } = useGetForum({ _id: params._id! });

  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 3 }}>
        <ForumList />
      </Grid>
      <Grid size={{ md: 9 }}>
        <Box display="flex" height="100vh">
          <h1>{data?.forum.name}</h1>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Forum;
