"use client";
import { useEffect, useMemo, useState } from "react";
import Table from "../../table";
import { AgregarButton } from "../../button/button";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function ResolutionCard({product}) {
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
  //   p_inidcliente: 1,
  //   chcodigocliente: 'CL00001',
  //   chtipocliente: 'CIVIL',
  //   razon: 'Perez Gomez Juan',
  //   p_inidresolucion: 1,
  //   chresolucion: null,
  //   chfechavencimiento: '11/07/2024',
  //   estado: true
  // }

  const columns = useMemo(
    () => [
      {
        accessorKey: "chcodigocliente",
        header: "CODIGO",
        size: 150,
      },
      {
        accessorKey: "chtipocliente",
        header: "TIPO CLIENTE",
        size: 150,
      },
      {
        accessorKey: "razon",
        header: "CLIENTE",
        size: 200,
      },
      {
        accessorKey: "chresolucion",
        header: "RESOLUCIÓN",
        size: 150,
      },
      {
        accessorKey: "chfechavencimiento",
        header: "FECHA VENCIMIENTO",
        size: 150,
      },
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
      <AgregarButton text='Nueva Resolución' className='w-fit' />
      <Divider />
      <Table
        columns={columns}
        data={data}
        renderRowActions={renderRowActions}
      />
    </div>
  );
}
