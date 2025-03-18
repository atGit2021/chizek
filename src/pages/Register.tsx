import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "../components/auth/Auth";
import { useCreateUser } from "../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessage } from "../utils/extractErrorMessage";
import { useLogin } from "../hooks/useLogin";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errors";

interface RegistrationData {
  email: string;
  password: string;
  username?: string;
  phone?: string;
}

const Register = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");
  const { login } = useLogin();

  const handleRegister = async ({ email, password }: RegistrationData) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
          },
        },
      });
      await login({ email, password });
      setError("");
    } catch (error) {
      const errorMessage = extractErrorMessage(error);
      if (errorMessage) {
        setError(errorMessage);
        return;
      }
      setError(UNKNOWN_ERROR_MESSAGE);
    }
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
      error={error}
    >
      <MUILink component={Link} to="/login" style={{ alignSelf: "center" }}>
        Login
      </MUILink>
    </Auth>
  );
};

export default Register;
