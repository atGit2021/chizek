import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Container>
      <RouterProvider router={router} />
    </Container>
  </ThemeProvider>;
}

export default App;
