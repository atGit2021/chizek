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
import Header from "./components/header/Header";

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
        <Header />
        <RouterProvider router={router}>
          <Container></Container>
        </RouterProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
