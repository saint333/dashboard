'use client'
import { createContext, useContext, useReducer } from "react";
import { initialAuthState } from "../state/AuthState";
import { reducerAuth } from "./AuthReducer";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(reducerAuth, initialAuthState)}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
