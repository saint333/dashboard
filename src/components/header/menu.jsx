"use client";
import { CiGlobe } from "react-icons/ci";
import { BiExitFullscreen, BiMoon, BiSun } from "react-icons/bi";
import {
  Avatar,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import { useGlobalProvider } from "@/context/global/GlobalContext";
import { globalCase } from "@/context/common/GlobalConstants";
import { useState } from "react";
import { Logout, Settings } from "@mui/icons-material";
import { useFullScreen } from "@/context/screen/ScreenContext";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { signOut } from "@/app/auth";

export default function MenuOptions({domain}) {
  const theme = useTheme();
  const [{}, dispatch] = useGlobalProvider();
  const { isFullScreen, enterFullScreen, exitFullScreen } = useFullScreen();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = Boolean(anchorEl);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickUser = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorEl(null);
  };

  const handleTheme = (theme) => {
    console.log("🚀 ~ handleTheme ~ theme:", theme)
    dispatch({ type: globalCase.THEME, theme });
    localStorage.setItem("theme", theme);
  };

  return (
    <div className='flex items-center justify-evenly gap-4 flex-row flex-wrap md:flex-nowrap transition-all duration-75'>
      <IconButton className="order-3 md:order-none">
        <CiGlobe className='text-2xl' />
      </IconButton>
      <FormControl sx={{ minWidth: 80 }} size="small" className="order-1 w-full md:order-none">
        <InputLabel sx={{ color: 'text.primary' }}>Dominios</InputLabel>
        <Select
          value={domain.p_iniddominio_default}
          onChange={(e) => console.log("🚀 ~ e:", e)}
          autoWidth
          label="Dominios"
        >
          {domain && domain.lists.map((item, index) => (
            <MenuItem key={index} value={item.p_iniddominio}>{item.chnombrecomercial}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 80 }} size="small" className="order-2 w-full md:order-none">
        <InputLabel sx={{ color: 'text.primary' }}>Sucursales</InputLabel>
        <Select
          value={age}
          onChange={handleChange}
          autoWidth
          label="Sucursales"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
      {theme.palette.mode === "dark" ? (
        <IconButton onClick={() => handleTheme("light")} className="order-4 md:order-none">
          <BiSun className='text-2xl' />
        </IconButton>
      ) : (
        <IconButton onClick={() => handleTheme("dark")} className="order-4 md:order-none">
          <BiMoon className='text-2xl' />
        </IconButton>
      )}
      <IconButton className="order-5 md:order-none">
        {isFullScreen ? (
          <BiExitFullscreen
            className='text-2xl'
            onClick={() => exitFullScreen()}
          />
        ) : (
          <FullscreenIcon
            className='text-2xl'
            onClick={() => enterFullScreen()}
          />
        )}
      </IconButton>
      <IconButton
        onClick={handleClickUser}
        size='small'
        aria-controls={user ? "account-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={user ? "true" : undefined}
        className="order-6 md:order-none"
      >
        <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={user}
        onClose={handleCloseUser}
        onClick={handleCloseUser}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography component='div' textAlign='center' sx={{ py: 1, px: 5 }}>
          <Typography variant='subtitle1' textAlign='center'>
            Percy Kewshun
          </Typography>
          <Typography variant='caption' textAlign='center'>
            Senior Admin
          </Typography>
        </Typography>
        <Divider />
        <MenuItem onClick={handleCloseUser}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleCloseUser}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseUser}>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => {
          handleCloseUser()
          signOut()
        }
        }>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
