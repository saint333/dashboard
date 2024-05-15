"use client";
import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { initialGlobalState } from "../state/GlobalState";
import { reducerglobal } from "./GlobalReducer";
import { initialTheme } from "@/mock/theme";
import { FullScreenProvider } from "../screen/ScreenContext";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...initialTheme[mode],
  },
});

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={useReducer(reducerglobal, initialGlobalState)}
    > 
      <Theme>
        <FullScreenProvider>
          {children}
        </FullScreenProvider>
      </Theme>
    </GlobalContext.Provider>
  );
};

const Theme = ({ children }) => {
  const [{ theme }] = useGlobalProvider();
  return (
    <ThemeProvider
      theme={createTheme(getDesignTokens(theme))}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const useGlobalProvider = () => useContext(GlobalContext);
