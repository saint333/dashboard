"use client";
import { menuCase } from "@/context/common/MenuConstants";
import { useMenuProvider } from "@/context/menu/MenuContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MenuOptions from "./menu";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Divider, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",
  backgroundImage: "none",
  backgroundColor: theme.palette.background.paper,
  ...(!open && {
    marginLeft: `0px`,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${theme.spacing(8)})`,
      marginLeft: `calc(100% - ${theme.spacing(8)})`,
    },
  }),
  ...(open && {
    marginLeft: "0px",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
  }),
}));

export default function Header({session}) {
  const [{ collapsed }, dispatch] = useMenuProvider();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar position='fixed' open={collapsed}>
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <IconButton
          onClick={() => {
            collapsed
              ? dispatch({ type: menuCase.COLLAPSED })
              : dispatch({ type: menuCase.COLLAPSED });
          }}
          sx={{
            marginRight: 5,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Image
          src='/icons/logo.png'
          alt='logo'
          priority
          width={150}
          height={50}
          className='m-auto md:hidden'
          onClick={() => router.push("/dashboard")}
        />
        <IconButton className='md:!hidden' onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <div className='hidden md:block'>
          <MenuOptions session={session} />
        </div>
      </Toolbar>
      {open && (
        <div className='md:hidden'>
          <Divider />
          <div className='p-4'>
            <MenuOptions session={session} />
          </div>
        </div>
      )}
    </AppBar>
  );
}
