import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { ForumFragmentFragment } from '../../../gql/graphql';
import Box from '@mui/material/Box';

const ForumListItem = ({ forum }: { forum: ForumFragmentFragment }) => {
  const navigate = useNavigate();
  const pathId = useLocation().pathname.split('/forums/')[1];
  const isSelected = forum._id === pathId;

  return (
    <>
      <ListItem alignItems="flex-start" disablePadding sx={{ width: '100%' }}>
        <ListItemButton
          onClick={() => navigate(`/forums/${forum._id}`)}
          selected={isSelected}
          sx={{ width: '100%', maxWidth: '100%' }}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Box
            sx={{ flex: 1, minWidth: 0, overflow: 'hidden', maxWidth: '250px' }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 'medium',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '250px',
              }}
            >
              {forum.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                minWidth: 0,
                maxWidth: '250px',
              }}
            >
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', flexShrink: 0 }}
              >
                {forum.latestMessage?.user?.username}
              </Typography>
              {forum.latestMessage?.content && (
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    marginLeft: '0.5rem',
                    flex: 1,
                    minWidth: 0,
                    maxWidth: '120px',
                  }}
                >
                  {` - ${forum.latestMessage.content}`}
                </Typography>
              )}
            </Box>
          </Box>
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default ForumListItem;
