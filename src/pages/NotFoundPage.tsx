import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h2" component="h2" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" component="p" sx={{ fontSize: "2.0rem" }}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
