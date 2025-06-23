import Forum from '../components/forum/Forum';
import Grid from '@mui/material/Grid2';
import { useParams } from 'react-router-dom';
import { useGetForums } from '../hooks/useGetForums';
import { PAGE_SIZE } from '../constants/page-size';
import { useCountForums } from '../hooks/useCountForums';
import { useEffect, useState } from 'react';
import { Box, Divider, Stack } from '@mui/material';
import ForumListItem from '../components/forum-list/forum-list-item/ForumListItem';
import ForumListHeader from '../components/forum-list/forum-list-header/ForumListHeader';
import ForumListAdd from '../components/forum-list/forum-list-modal/ForumListAdd';
import { useMessageCreated } from '../hooks/useMessageCreated';
import InfiniteScroll from 'react-infinite-scroller';

const Forums = () => {
  const { data, fetchMore } = useGetForums({ skip: 0, limit: PAGE_SIZE });
  const { forumsCount, countForums } = useCountForums();
  const params = useParams();
  const forumIdSelected = params._id ?? undefined;
  const [forumListAddVisible, setForumListAddVisible] = useState(false);
  let forumSelected = null;

  if (forumIdSelected) {
    forumSelected = data?.forums.find((forum) => forum._id === forumIdSelected);
  }

  useMessageCreated({
    forumIds: data?.forums.map((forum) => forum._id) || [],
  });

  useEffect(() => {
    countForums();
  }, [countForums]);

  return (
    <Grid container spacing={2}>
      <Grid
        sx={{ gridColumn: { xs: 'span 12', md: 'span 3' }, height: '100%' }}
      >
        <Stack sx={{ maxWidth: '300px' }}>
          <ForumListHeader
            handleAddForum={() => setForumListAddVisible(true)}
          />
          <Divider />
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
              bgcolor: 'background.paper',
              maxHeight: '80vh',
              overflow: 'auto',
            }}
          >
            <InfiniteScroll
              pageStart={0}
              loadMore={() =>
                fetchMore({
                  variables: {
                    skip: data?.forums.length || 0,
                    limit: PAGE_SIZE,
                  },
                })
              }
              hasMore={
                data?.forums && forumsCount
                  ? forumsCount > data?.forums.length
                  : false
              }
              useWindow={false}
            >
              {data?.forums &&
                [...data.forums]
                  .sort((forumA, forumB) => {
                    if (!forumA.latestMessage) return 1;
                    if (!forumB.latestMessage) return -1;
                    return (
                      new Date(forumB.latestMessage.createdAt).getTime() -
                      new Date(forumA.latestMessage.createdAt).getTime()
                    );
                  })
                  .map((forum) => (
                    <ForumListItem key={forum._id} forum={forum} />
                  ))}
            </InfiniteScroll>
          </Box>
        </Stack>
      </Grid>
      <Grid
        sx={{ gridColumn: { xs: 'span 12', md: 'span 9' }, height: '100%' }}
      >
        {forumSelected && <Forum forum={forumSelected} />}
      </Grid>
      <ForumListAdd
        open={forumListAddVisible}
        handleClose={() => setForumListAddVisible(false)}
      />
    </Grid>
  );
};

export default Forums;
