import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "../services/auth/Auth";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const handleLogin = async (credentials: LoginData) => {
    console.log("Logging in with", credentials);
  };

  const initialLoginData = {
    email: "",
    password: "",
  };

  return (
    <Auth<LoginData>
      submitLabel="Login"
      onSubmit={handleLogin}
      defaultValues={initialLoginData}
    >
      <MUILink component={Link} to="/register" style={{ alignSelf: "center" }}>
        Register
      </MUILink>
    </Auth>
  );
};

export default Login;
