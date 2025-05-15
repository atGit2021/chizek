import Forum from '../components/forum/Forum';
import ForumList from '../components/forum-list/ForumList';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetForums } from '../hooks/useGetForums';

const Forums = () => {
  const { data } = useGetForums();
  const params = useParams();
  const forumIdSelected = params._id ?? undefined;
  let forumSelected = null;
  if (forumIdSelected) {
    forumSelected = data?.forums.find((forum) => forum._id === forumIdSelected);
  }

  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 3 }}>
        <ForumList forums={data} />
      </Grid>
      <Grid size={{ md: 9 }}>
        {forumSelected ? (
          <Forum forum={forumSelected} />
        ) : (
          <Typography>Forum News</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Forums;
