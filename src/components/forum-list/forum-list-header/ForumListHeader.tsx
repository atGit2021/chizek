import AddCircle from '@mui/icons-material/AddCircle';
import { AppBar, IconButton, Toolbar } from '@mui/material';

interface ForumListHeaderProps {
  handleAddForum: () => void;
}

const ForumListHeader = ({ handleAddForum }: ForumListHeaderProps) => {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={handleAddForum}>
          <AddCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ForumListHeader;
