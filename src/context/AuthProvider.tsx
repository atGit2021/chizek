import { createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import client from "../constants/api/apollo-client";

interface AuthContextType {
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login"); 

    try {
      await client.resetStore();
    } catch (error) {
      console.error("Error resetting Apollo store:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
