"use client";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),   
  ...theme.mixins.toolbar,
}));

export default function Main({ children }) {
  return (
    <Box component='main' sx={{ flexGrow: 1, p: 3, height: '100%' }}>
      <DrawerHeader />
      {children}
    </Box>
  );
}
