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
import { PAGE_SIZE } from '../../constants/page-size';
import { useCountMessages } from '../../hooks/useCountMessages';
import InfiniteScroll from 'react-infinite-scroller';

const Forum = ({ forum }: { forum: ForumFragmentFragment }) => {
  const forumId = forum._id;
  const [message, setMessage] = useState('');
  const [createMessage] = useCreateMessage();
  const { data: messages, fetchMore } = useGetMessages({
    forumId,
    skip: 0,
    limit: PAGE_SIZE,
  });
  const divRef = useRef<HTMLDivElement | null>(null);
  const { messagesCount, countMessages } = useCountMessages(forumId);

  useEffect(() => {
    countMessages();
  }, [countMessages]);

  const scrollToBottom = () =>
    divRef.current?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    if (messages?.messages && messages.messages.length <= PAGE_SIZE) {
      setMessage('');
      scrollToBottom();
    }
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
        <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 12' } }}>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              paddingX: { xs: 1, md: 2 },
              alignItems: 'flex-start',
            }}
          >
            <Box sx={{ flex: 1, overflowY: 'auto', padding: 2, width: '100%' }}>
              <Typography
                variant="h4"
                sx={{ marginBottom: 2, wordBreak: 'break-word' }}
              >
                {forum.name}
              </Typography>
              <Box
                sx={{
                  maxHeight: 'calc(100vh - 200px)',
                  overflowY: 'auto',
                }}
              >
                <InfiniteScroll
                  pageStart={0}
                  isReverse={true}
                  loadMore={() => {
                    fetchMore({
                      variables: {
                        skip: messages?.messages.length,
                      },
                    });
                  }}
                  hasMore={
                    messages && messagesCount
                      ? messagesCount > messages?.messages.length
                      : false
                  }
                  useWindow={false}
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
                          alignItems={'flex-start'}
                          marginBottom={{ xs: '0.5rem', md: '1rem' }}
                          spacing={2}
                          wrap="nowrap"
                        >
                          <Grid sx={{ flexShrink: 0 }}>
                            <Avatar src="" sx={{ width: 52, height: 52 }} />
                          </Grid>
                          <Grid sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Stack spacing={0.5}>
                              <Paper
                                sx={{ width: 'fit-content', maxWidth: '100%' }}
                              >
                                <Typography
                                  sx={{
                                    padding: '0.9rem',
                                    wordBreak: 'break-word',
                                  }}
                                >
                                  {message.content}
                                </Typography>
                              </Paper>
                              <Typography
                                variant="caption"
                                sx={{ marginLeft: '0.25rem' }}
                              >
                                {new Date(message.createdAt).toLocaleString()} -{' '}
                                {new Date(
                                  message.createdAt,
                                ).toLocaleDateString()}
                              </Typography>
                            </Stack>
                          </Grid>
                        </Grid>
                      ))}
                  <div ref={divRef}></div>
                </InfiniteScroll>
              </Box>
            </Box>
            <Paper
              sx={{
                p: 0.5,
                display: 'flex',
                alignItems: 'center',
                width: { xs: '100%', sm: '350px' },
                borderTop: '1px solid #ddd',
                margin: '1rem 0',
                alignSelf: 'flex-start',
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, width: '100%' }}
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
