import Forum from '../components/forum/Forum';
import ForumList from '../components/forum-list/ForumList';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetForums } from '../hooks/useGetForums';
import { PAGE_SIZE } from '../constants/page-size';
import { useCountForums } from '../hooks/useCountForums';
import { useEffect } from 'react';

const Forums = () => {
  const { data, fetchMore } = useGetForums({ skip: 0, limit: PAGE_SIZE });
  const { forumsCount, countForums } = useCountForums();
  const params = useParams();
  const forumIdSelected = params._id ?? undefined;
  let forumSelected = null;
  if (forumIdSelected) {
    forumSelected = data?.forums.find((forum) => forum._id === forumIdSelected);
  }

  useEffect(() => {
    countForums();
  }, [countForums]);

  return (
    <Grid container spacing={2}>
      <Grid size={{ md: 3 }}>
        <ForumList
          forums={data}
          fetchMore={fetchMore}
          forumsCount={forumsCount}
        />
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
