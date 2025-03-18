import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/api/apollo-client";
import Header from "./components/header/Header";
import { authenticatedVar } from "./constants/authenticated";
import Snackbar from "./components/snackbar/Snackbar";
import ChatList from "./components/chat-list/ChatList";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const storedAuth = sessionStorage.getItem("authenticated");

if (storedAuth === "true") {
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
        <Grid container spacing={2}>
          <Grid size={{ md: 3 }}>
            <ChatList />
          </Grid>
          <Grid size={{ md: 9 }}>
            <RouterProvider router={router}>
              <Container></Container>
            </RouterProvider>
          </Grid>
        </Grid>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
