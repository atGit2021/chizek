import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { ForumFragmentFragment } from '../../../gql/graphql';

const ForumListItem = ({ forum }: { forum: ForumFragmentFragment }) => {
  const navigate = useNavigate();
  const pathId = useLocation().pathname.split('/forums/')[1];
  const isSelected = forum._id === pathId;

  return (
    <>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemButton
          onClick={() => navigate(`/forums/${forum._id}`)}
          selected={isSelected}
        >
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={forum.name}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: 'text.primary', display: 'inline' }}
                >
                  {forum.latestMessage?.user?.username}
                </Typography>
                {forum.latestMessage?.content
                  ? ` - ${forum.latestMessage.content}`
                  : ''}
              </>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default ForumListItem;
