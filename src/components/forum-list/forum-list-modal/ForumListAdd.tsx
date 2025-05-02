import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { MouseEvent, useState } from 'react';
import { useCreateForum } from '../../../hooks/useCreateForum';
import { useNavigate } from 'react-router-dom';

interface ForumListAddProps {
  open: boolean;
  handleClose: () => void;
}

const ForumListAdd = ({ open, handleClose }: ForumListAddProps) => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [createForum, { loading }] = useCreateForum();
  const navigate = useNavigate();

  const handleModalClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const handleSave = async () => {
    if (!isPrivate && !name.length) {
      setError('Forum name is required.');
      return;
    }
    const result = await createForum({
      variables: {
        createForumInput: {
          isPrivate,
          name: name || undefined,
        },
      },
    });
    const newForumId = result.data?.createForum._id;
    if (newForumId) {
      onClose();
      navigate(`/forum/${result.data?.createForum._id}`);
    } else {
      setError('Forum creation failed. Please try again.');
    }
  };

  const onClose = () => {
    setError('');
    setName('');
    setIsPrivate(false);
    handleClose();
  };

  return (
    <Modal open={open} onClick={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #040',
          boxShadow: 24,
          p: 4,
        }}
        onClick={handleModalClick}
      >
        <Stack spacing={2}>
          <Typography variant="h6" component="h2">
            Add Forum
          </Typography>
          <FormGroup>
            <FormControlLabel
              style={{ width: 0 }}
              control={
                <Switch
                  checked={isPrivate}
                  onChange={(event) => setIsPrivate(event.target.checked)}
                />
              }
              label="Private"
            ></FormControlLabel>
          </FormGroup>
          {isPrivate ? (
            <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Users" />
              <IconButton sx={{ p: '10px' }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          ) : (
            <TextField
              label="Name"
              error={!!error}
              helperText={error}
              onChange={(event) => setName(event.target.value)}
            />
          )}
          <Button variant="outlined" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ForumListAdd;
