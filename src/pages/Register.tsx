import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "../services/auth/Auth";
import { useCreateUser } from "../hooks/useCreateUser";

interface RegistrationData {
  email: string;
  password: string;
  username?: string;
  phone?: string;
}

const Register = () => {
  const [createUser] = useCreateUser();

  const handleRegister = async ({ email, password }: RegistrationData) => {
    await createUser({
      variables: {
        createUserInput: {
          email,
          password,
        },
      },
    });
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
      <MUILink component={Link} to="/login" style={{ alignSelf: "center" }}>
        Login
      </MUILink>
    </Auth>
  );
};

export default Register;
