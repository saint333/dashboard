"use client";
import { useEffect, useMemo, useState } from "react";
import Table from "../../table";
import { AgregarButton } from "../../button/button";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function ConsultTable({product}) {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setData(product);
  }, [product]);

  // {
  //   p_inidproveedor: 1,
  //   chcodigoproveedor: 'PV00001',
  //   razon: 'SANCHEZ PRUEBA MASSS',
  //   chtipodocumento: 'OTRO',
  //   chnrodocumento: '12345679',
  //   chdireccion: 'Calle Ejemplo 123 - AMAZONAS CHACHAPOYAS CHACHAPOYAS',
  //   chtelefono: '999999999',
  //   p_inidjurinat: 1,
  //   estado: true
  // }

  const columns = useMemo(
    () => [
      {
        accessorKey: "chcodigoproveedor",
        header: "CODIGO",
        size: 150,
      },
      {
        accessorKey: "razon",
        header: "PERSONA - EMPRESA",
        size: 150,
      },
      {
        accessorKey: "chtipodocumento",
        header: "DOCUMENTO",
        size: 200,
      },
      {
        accessorKey: "chnrodocumento",
        header: "N° DOCUMENTO",
        size: 150,
      },
      {
        accessorKey: "chdireccion",
        header: "DIRECCIÓN",
        size: 150,
      },
      {
        accessorKey: "chtelefono",
        header: "TELEFONO",
        size: 150,
      }
    ],
    []
  );
  const renderRowActions = (row) => {
    return (
      <div className='flex gap-2'>
        <IconButton
          aria-label='more'
          id='long-button'
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup='true'
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id='long-menu'
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PopoverClasses={{ paper: '!shadow-lg' }}
        >
          <MenuItem onClick={handleClose}>
            <Edit />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Delete />
          </MenuItem>
        </Menu>
      </div>
    );
  };
  return (
    <div className='grid gap-4 items-start'>
      <AgregarButton text='Nueva Tarjeta' className='w-fit' />
      <Divider />
      <Table
        columns={columns}
        data={data}
        renderRowActions={renderRowActions}
      />
    </div>
  );
}
