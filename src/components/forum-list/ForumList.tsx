import List from '@mui/material/List';
import { Divider, Stack } from '@mui/material';
import { useState } from 'react';
import { useGetForums } from '../../hooks/useGetForums';
import ForumListItem from './forum-list-item/ForumListItem';
import ForumListHeader from './forum-list-header/ForumListHeader';
import ForumListAdd from './forum-list-modal/ForumListAdd';

const ForumList = () => {
  const [forumListAddVisible, setForumListAddVisible] = useState(false);
  const { data } = useGetForums();

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
            maxWidth: 360,
            bgcolor: 'background.paper',
            maxHeight: '80vh',
            overflow: 'auto',
          }}
        >
          {data?.forums
            .map((forum) => <ForumListItem key={forum._id} forum={forum} />)
            .reverse()}
        </List>
      </Stack>
    </>
  );
};

export default ForumList;
