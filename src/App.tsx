import {
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
import { authenticatedVar } from './constants/authenticated';
import Snackbar from './components/snackbar/Snackbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const storedAuth = sessionStorage.getItem('authenticated');

if (storedAuth === 'true') {
  authenticatedVar(true);
} else {
  authenticatedVar(false);
}

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <RouterProvider router={router}>
          <Container></Container>
        </RouterProvider>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
