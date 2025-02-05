import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "../components/auth/Auth";
import { useLogin } from "../hooks/useLogin";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const { login, error } = useLogin();
  
  const initialLoginData = {
    email: "",
    password: "",
  };

  return (
    <Auth<LoginData>
      submitLabel="Login"
      onSubmit={(request) => login(request)}
      defaultValues={initialLoginData}
      error={error}
    >
      <MUILink component={Link} to="/register" style={{ alignSelf: "center" }}>
        Register
      </MUILink>
    </Auth>
  );
};

export default Login;
