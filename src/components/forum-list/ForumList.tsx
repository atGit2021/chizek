import { Box, Divider, Stack } from '@mui/material';
import { useState } from 'react';
import ForumListItem from './forum-list-item/ForumListItem';
import ForumListHeader from './forum-list-header/ForumListHeader';
import ForumListAdd from './forum-list-modal/ForumListAdd';
import { ForumsQuery, ForumsQueryVariables } from '../../gql/graphql';
import { useMessageCreated } from '../../hooks/useMessageCreated';
import InfiniteScroll from 'react-infinite-scroller';
import { PAGE_SIZE } from '../../constants/page-size';

const ForumList = ({
  forums,
  fetchMore,
  forumsCount,
}: {
  forums: ForumsQuery | undefined;
  fetchMore: (options: { variables: ForumsQueryVariables }) => Promise<unknown>;
  forumsCount: number | undefined;
}) => {
  const [forumListAddVisible, setForumListAddVisible] = useState(false);

  useMessageCreated({
    forumIds: forums?.forums.map((forum) => forum._id) || [],
  });

  return (
    <>
      <ForumListAdd
        open={forumListAddVisible}
        handleClose={() => setForumListAddVisible(false)}
      />
      <Stack>
        <ForumListHeader handleAddForum={() => setForumListAddVisible(true)} />
        <Divider />
        <Box
          sx={{
            width: '100%',
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
                  skip: forums?.forums.length || 0,
                  limit: PAGE_SIZE,
                },
              })
            }
            hasMore={
              forums?.forums && forumsCount
                ? forumsCount > forums?.forums.length
                : false
            }
            useWindow={false}
          >
            {forums?.forums &&
              [...forums.forums]
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
    </>
  );
};

export default ForumList;
