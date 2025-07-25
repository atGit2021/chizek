import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { onLogout } from '../../utils/onLogout';
import { snackVar } from '../../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../../constants/errors';
import router from '../../routes/Routes';
import { useGetCurrentUser } from '../../hooks/useGetCurrentUser';

const Settings = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { data } = useGetCurrentUser();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={data?.getCurrentUser?.username || 'Settings'}
            src={data?.getCurrentUser?.imageUrl}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key="profile" onClick={() => router.navigate('/profile')}>
          <Typography sx={{ textAlign: 'center' }}>Profile</Typography>
        </MenuItem>
        <MenuItem
          key="logout"
          onClick={async () => {
            try {
              await onLogout();
              handleCloseUserMenu();
            } catch {
              snackVar(UNKNOWN_ERROR_SNACK_MESSAGE);
            }
          }}
        >
          <Typography sx={{ textAlign: 'center' }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Settings;
