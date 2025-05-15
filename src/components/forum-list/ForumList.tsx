import List from '@mui/material/List';
import { Divider, Stack } from '@mui/material';
import { useState } from 'react';
import ForumListItem from './forum-list-item/ForumListItem';
import ForumListHeader from './forum-list-header/ForumListHeader';
import ForumListAdd from './forum-list-modal/ForumListAdd';
import { ForumsQuery } from '../../gql/graphql';

interface ForumListProps {
  forums: ForumsQuery | undefined;
}
const ForumList = ({ forums }: ForumListProps) => {
  const [forumListAddVisible, setForumListAddVisible] = useState(false);

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
