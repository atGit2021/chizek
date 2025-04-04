import List from '@mui/material/List';
import ChatListItem from './chat-list-item/ChatListItem';
import ChatListHeader from './chat-list-header/ChatListHeader';
import { Divider, Stack } from '@mui/material';
import { useState } from 'react';
import ChatListAdd from './chat-list-modal/ChatListAdd';
import { useGetForums } from '../../hooks/useGetForums';

const ChatList = () => {
  const [chatListAddVisible, setChatListAddVisible] = useState(false);
  const { data } = useGetForums();

  return (
    <>
      <ChatListAdd
        open={chatListAddVisible}
        handleClose={() => setChatListAddVisible(false)}
      />
      <Stack>
        <ChatListHeader handleAddChat={() => setChatListAddVisible(true)} />
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
          {data?.forums.map((forum) => (
            <ChatListItem key={forum._id} forum={forum} />
          ))}
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
