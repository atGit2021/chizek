import { Avatar, Button, Stack, Typography } from '@mui/material';
import { UploadFile } from '@mui/icons-material';
import { useGetCurrentUser } from '../../hooks/useGetCurrentUser';
import { snackVar } from '../../constants/snack';
import { commonFetch } from '../../utils/commonFetch';

const Profile = () => {
  const { data } = useGetCurrentUser();
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file); //key needs to match backend FileInterceptor name

      const response = await commonFetch(`/user/image`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Image upload failed.');
      }

      snackVar({ message: 'Image uploaded successfully.', type: 'success' });
    } catch (error) {
      snackVar({ message: `${error}`, type: 'error' });
    }
  };

  return (
    <Stack
      spacing={6}
      sx={{
        marginTop: '2.5rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h1">{data?.getCurrentUser?.username}</Typography>
      <Avatar
        sx={{ width: 256, height: 256 }}
        src={data?.getCurrentUser?.imageUrl}
      />
      <Button
        component="label"
        variant="contained"
        size="large"
        startIcon={<UploadFile />}
      >
        Upload Image
        <input type="file" hidden onChange={handleImageUpload} />
      </Button>
    </Stack>
  );
};

export default Profile;
