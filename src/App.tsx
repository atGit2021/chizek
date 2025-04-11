import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes';
import { ApolloProvider } from '@apollo/client';
import client from './constants/api/apollo-client';
import Header from './components/header/Header';
import Snackbar from './components/snackbar/Snackbar';
import { useGetCurrentUser } from './hooks/useGetCurrentUser';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AppContent = () => {
  const { loading } = useGetCurrentUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <Container maxWidth="lg" sx={{ height: '100%' }}>
            <RouterProvider router={router} />
          </Container>
        </Box>
        <Snackbar />
      </Box>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContent />
    </ApolloProvider>
  );
};

export default App;
