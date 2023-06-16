import { UserI, User, LoginForm } from "interfaces";
import React, { createContext } from "react";
import { UserT } from "types";

interface AuthContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    signin: (credentials: LoginForm) => Promise<void>;
    signout: () => Promise<void>;
  }

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => {},
    signin: () => Promise.resolve(),
    signout: () => Promise.resolve(),
});