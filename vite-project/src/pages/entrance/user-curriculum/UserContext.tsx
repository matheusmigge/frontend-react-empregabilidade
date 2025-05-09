import React, { createContext, useState, useEffect, ReactNode } from "react";

interface UserData {
  nome?: string;
  sobrenome?: string;
  cpf?: string;
  dataNascimento?: string;
  email?: string;
  telefone?: string;
  cep?: string;
  rua?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  numero?: string;
  linkedin?: string;
  portfolio?: string;
}

interface UserContextProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(() => {
    // Carrega os dados do localStorage ao inicializar
    const storedData = localStorage.getItem("userData");
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    // Salva os dados no localStorage sempre que forem atualizados
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};