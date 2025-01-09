import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

interface RegistrationData {
  username: string;
  email: string;
  password: string;
  phone?: string;
}

const Register = () => {
  const handleRegister = async (registrationData: RegistrationData) => {
    console.log("Registering with", registrationData);
  };

  const initialRegistrationData = {
    username: "",
    email: "",
    password: "",
    phone: "",
  };

  return (
    <Auth<RegistrationData>
      submitLabel="Register"
      onSubmit={handleRegister}
      defaultValues={initialRegistrationData}
    >
      <Link to={"/login"} style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Register;
