"use client";
import { useMenuProvider } from "@/context/menu/MenuContext";
import Image from "next/image";
import { menu } from "@/mock/menu";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DrawerHeader } from "../main";
import { drawerWidth } from "../header";
import { Collapse, Icon, ListSubheader } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { menuCase } from "@/context/common/MenuConstants";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  zIndex: 10,
  position: "fixed",
  [theme.breakpoints.up("md")]: {
    position: "initial",
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `0px`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MenuItems = ({ menu = [], collapsed }) => {
  const [open, setOpen] = useState({});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [{ }, dispatch] = useMenuProvider();

  const handleClick = (id) => {
    setOpen({ ...open, [id]: !open[id] });
  };
  const router = useRouter();
  return menu.map((item) => {
    if (item.type === "item") {
      return (
        <List key={item.id} onClick={() => {
            router.push(item.url)
            if (!matches) {
              dispatch({ type: menuCase.COLLAPSED })
            }
          }}
          sx={{padding : 0}}
          >
          <ListItem disablePadding sx={{ display: "block", padding: 0 }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? "initial" : "center",
                padding: 0
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Icon color='primary'>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: collapsed ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      );
    }
    if (item.type === "group") {
      return (
        <List
          key={item.id}
          subheader={
            collapsed && (
              <ListSubheader sx={{ color: "#74829c" }}>
                {item.title}
              </ListSubheader>
            )
          }
        >
          <MenuItems menu={item.children} collapsed={collapsed} />
        </List>
      );
    }
    if (item.type === "collapse") {
      return (
        <List key={item.id} sx={{padding : 0}}>
          <ListItem disablePadding sx={{ display: "block", padding: 0 }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: collapsed ? "initial" : "center",
                padding: 0
              }}
              onClick={() => handleClick(item.id)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Icon color='primary'>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: collapsed ? 1 : 0 }}
              />
              {collapsed ? (
                open[item.id] ? (
                  <KeyboardArrowRightIcon />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
            <Collapse
              in={collapsed && open[item.id]}
              timeout='auto'
              unmountOnExit
            >
              <MenuItems menu={item.children} collapsed={collapsed} />
            </Collapse>
          </ListItem>
        </List>
      );
    }
    if (item.type === "subitem") {
      return (
        <List disablePadding key={item.id} sx={{padding : 0}}>
          <ListItem disablePadding sx={{ display: "block", padding: 0 }}>
            <ListItemButton
              sx={{ minHeight: 48 }}
              onClick={() => router.push(item.url)}
              padding={0}
            >
              <ListItemIcon>
                <Icon color='primary'>{item.icon}</Icon>
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{ opacity: collapsed ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      );
    }
  });
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [{ collapsed }] = useMenuProvider();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant='permanent' open={open || collapsed} hideBackdrop='true'>
        <DrawerHeader>
          {!collapsed && !open ? (
            <Image
              src='/icons/icon-lina-dark.png'
              alt='logo'
              width={50}
              height={50}
              priority
              className='m-auto'
            />
          ) : (
            <Image
              src='/icons/logo.png'
              alt='logo'
              width={200}
              height={50}
              priority
              className='m-auto'
            />
          )}
        </DrawerHeader>
        <Divider />
        <div className='overflow-y-auto overflow-x-hidden menu' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          <MenuItems menu={menu} collapsed={open || collapsed} />
        </div>
      </Drawer>
    </Box>
  );
}

export default Navbar;
