"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
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
  return (
    <GlobalContext.Provider
      value={useReducer(reducerglobal, initialGlobalState)}
    >
      <Theme>
        <FullScreenProvider>{children}</FullScreenProvider>
      </Theme>
    </GlobalContext.Provider>
  );
};

export const useGlobalProvider = () => useContext(GlobalContext);

const Theme = ({ children }) => {
  const [{theme}] = useGlobalProvider();
  const [themeInitial, setTheme] = useState(theme);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [theme]);
  return (
    <ThemeProvider theme={createTheme(getDesignTokens(themeInitial))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

