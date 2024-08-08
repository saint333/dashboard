import { globalCase } from "@/context/common/GlobalConstants";
import { useGlobalProvider } from "@/context/global/GlobalContext";
import { IconButton, useTheme } from "@mui/material";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function Theme() {

  const theme = useTheme();
  const [{}, dispatch] = useGlobalProvider();

  const handleTheme = (theme) => {
    dispatch({ type: globalCase.THEME, theme });
    localStorage.setItem("theme", theme);
  };

  return (
    <>
      {theme.palette.mode === "dark" ? (
        <IconButton
          onClick={() => handleTheme("light")}
          className='order-4 md:order-none'
        >
          <BiSun className='text-2xl' />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => handleTheme("dark")}
          className='order-4 md:order-none'
        >
          <BiMoon className='text-2xl' />
        </IconButton>
      )}
    </>
  );
}
