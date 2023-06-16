import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import React, { useState } from "react";
import { signin as login, signout as logout } from "../../apis/auth";
import { UserI, LoginForm, User } from "interfaces";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const initialUser = useLoaderData() as User;
  const [user, setUser] = useState<User | null>(initialUser);

  async function signin(credentials: LoginForm) {
    const newUser = await login(credentials);
    setUser(newUser);
  }

  async function signout() {
    await logout();
    setUser(null);
  }

  const authContextValue = {
    user,
    setUser,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
