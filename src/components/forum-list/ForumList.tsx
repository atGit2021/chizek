import List from '@mui/material/List';
import { Divider, Stack } from '@mui/material';
import { useState } from 'react';
import ForumListItem from './forum-list-item/ForumListItem';
import ForumListHeader from './forum-list-header/ForumListHeader';
import ForumListAdd from './forum-list-modal/ForumListAdd';
import { ForumsQuery } from '../../gql/graphql';
import { useMessageCreated } from '../../hooks/useMessageCreated';

const ForumList = ({ forums }: { forums: ForumsQuery | undefined }) => {
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
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            maxHeight: '80vh',
            overflow: 'auto',
          }}
        >
          {forums?.forums
            .map((forum) => <ForumListItem key={forum._id} forum={forum} />)
            .reverse()}
        </List>
      </Stack>
    </>
  );
};

export default ForumList;
