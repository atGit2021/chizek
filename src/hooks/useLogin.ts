import { useState } from "react";
import { API_URL } from "../constants/api/urls";
import client from "../constants/api/apollo-client";

interface LoginRequest {
  email: string;
  password: string;
}

const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      setError(
        res.status === 401
          ? "Credentials are not valid."
          : "Unknown error occurred"
      );
      return;
    }
    setError("");
    await client.refetchQueries({ include: "active" });
  };

  return { login, error };
};

export { useLogin };
