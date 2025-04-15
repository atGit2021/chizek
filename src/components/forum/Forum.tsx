import { useParams } from 'react-router-dom';
import { useGetForum } from '../../hooks/useGetForum';
import { Divider, IconButton, InputBase, Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ForumList from '../forum-list/ForumList';
import SendIcon from '@mui/icons-material/Send';
import { useCreateMessage } from '../../hooks/useCreateMessage';
import { useState } from 'react';

const Forum = () => {
  const params = useParams();
  const forumId = params._id!;
  const { data } = useGetForum({ _id: forumId });
  const [message, setMessage] = useState('');
  const [createMessage] = useCreateMessage();

  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      <Grid size={{ md: 3 }}>
        <ForumList />
      </Grid>
      <Grid size={{ md: 9 }}>
        <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
          <h1>{data?.forum.name}</h1>
          <Paper
            sx={{
              p: 0.5,
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              placeholder="Message"
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              onClick={() => {
                createMessage({
                  variables: {
                    createMessageInput: { content: message, forumId },
                  },
                });
              }}
              color="primary"
              sx={{ p: '10px' }}
            >
              <SendIcon />
            </IconButton>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Forum;
