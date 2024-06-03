"use client";
import {
  createContext,
  useContext,
  useReducer,
} from "react";
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
  // const theme = window.localStorage.getItem("theme") || initialGlobalState.theme;
  const theme = initialGlobalState.theme;
  return (
    <GlobalContext.Provider
      value={useReducer(reducerglobal, initialGlobalState)}
    >
      <Theme theme={theme}>
        <FullScreenProvider>{children}</FullScreenProvider>
      </Theme>
    </GlobalContext.Provider>
  );
};

const Theme = ({ theme, children }) => {
  return (
    <ThemeProvider theme={createTheme(getDesignTokens(theme))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const useGlobalProvider = () => useContext(GlobalContext);
