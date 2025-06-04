import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import SendIcon from '@mui/icons-material/Send';
import { useCreateMessage } from '../../hooks/useCreateMessage';
import { useEffect, useRef, useState } from 'react';
import { useGetMessages } from '../../hooks/useGetMessage';
import { ForumFragmentFragment } from '../../gql/graphql';

const Forum = ({ forum }: { forum: ForumFragmentFragment }) => {
  const forumId = forum._id;
  const [message, setMessage] = useState('');
  const [createMessage] = useCreateMessage();
  const { data: messages } = useGetMessages({ forumId });
  const divRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () =>
    divRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    setMessage('');
    scrollToBottom();
  }, [forumId, messages]);

  const handleCreateMessage = async () => {
    if (!message.trim()) return;

    await createMessage({
      variables: {
        createMessageInput: { content: message, forumId },
      },
    });
    setMessage('');
    scrollToBottom();
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Grid container spacing={2} sx={{ flex: 1 }}>
        <Grid size={{ xs: 12, md: 9 }}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              paddingX: { xs: 1, md: 2 },
            }}
          >
            <Box sx={{ flex: 1, overflowY: 'auto', padding: 2 }}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {forum.name}
              </Typography>
              <Box
                sx={{
                  maxHeight: 'calc(100vh - 200 px)',
                  overflowY: 'auto',
                }}
              >
                {messages &&
                  [...messages.messages]
                    .sort(
                      (messageA, messageB) =>
                        new Date(messageA.createdAt).getTime() -
                        new Date(messageB.createdAt).getTime(),
                    )
                    .map((message) => (
                      <Grid
                        container
                        key={message._id}
                        alignItems={'center'}
                        marginBottom={{ xs: '0.5rem', md: '1rem' }}
                      >
                        <Grid size={{ xs: 2, md: 1 }}>
                          <Avatar src="" sx={{ width: 52, height: 52 }} />
                        </Grid>
                        <Grid size={{ xs: 10, md: 11 }}>
                          <Stack spacing={0.5}>
                            <Paper sx={{ width: 'fit-content' }}>
                              <Typography sx={{ padding: '0.9rem' }}>
                                {message.content}
                              </Typography>
                            </Paper>
                            <Typography
                              variant="caption"
                              sx={{ marginLeft: '0.25rem' }}
                            >
                              {new Date(message.createdAt).toLocaleString()}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    ))}
                <div ref={divRef}></div>
              </Box>
            </Box>
            <Paper
              sx={{
                p: 0.5,
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                borderTop: '1px solid #ddd',
                margin: '1rem 0',
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                placeholder="Message"
                onKeyDown={async (event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    await handleCreateMessage();
                  }
                }}
                multiline
                maxRows={4}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                onClick={handleCreateMessage}
                color="primary"
                sx={{ p: '10px' }}
              >
                <SendIcon />
              </IconButton>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Forum;
