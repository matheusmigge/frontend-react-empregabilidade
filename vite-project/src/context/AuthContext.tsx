import { createContext, useState, ReactNode } from "react";
import { Candidate, Company } from "../types";

interface AuthContextType {
  userType: "candidate" | "company" | null;
  userData: Candidate | Company | null;
  setUserType: (type: "candidate" | "company" | null) => void;
  setUserData: (data: Candidate | Company | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userType, setUserType] = useState<"candidate" | "company" | null>(null);
  const [userData, setUserData] = useState<Candidate | Company | null>(null);

  return (
    <AuthContext.Provider value={{ userType, userData, setUserType, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};