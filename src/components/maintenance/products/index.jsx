"use client";
import { useEffect, useMemo, useState } from "react";
import Table from "../../table";
import { AgregarButton } from "../../button/button";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModalProduct from "@/components/modal/product/product";

export default function ProductsList({ product }) {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

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

  const columns = useMemo(
    () => [
      {
        accessorKey: "chcodigoproducto",
        header: "CODIGO",
        size: 150,
      },
      {
        accessorKey: "chfamilia",
        header: "CATEGORIA",
        size: 150,
      },
      {
        accessorKey: "chtipo",
        header: "TIPO",
        size: 200,
      },
      {
        accessorKey: "chmarca",
        header: "MARCA",
        size: 150,
      },
      {
        accessorKey: "chunidadmedida",
        header: "MEDIDA",
        size: 150,
      },
      {
        accessorKey: "chdescripcion",
        header: "DESCRIPCIÓN",
        size: 150,
      },
      {
        accessorKey: "chsituacion",
        header: "SITUACIÓN",
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
      <AgregarButton text='Nuevo Producto' className='w-fit' onClick={() => setOpenModal(true)}/>
      <Divider />
      <Table
        columns={columns}
        data={data}
        renderRowActions={renderRowActions}
      />
      <ModalProduct open={openModal} setOpen={setOpenModal} title='Nuevo Producto' />
    </div>
  );
}
