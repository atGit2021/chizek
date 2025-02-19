import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/api/apollo-client";
import { AuthProvider } from "./context/AuthProvider";
import LogoutListener from "./components/auth/LogoutListener";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <RouterProvider router={router}>
            <AuthProvider>
              <LogoutListener />
            </AuthProvider>
          </RouterProvider>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
