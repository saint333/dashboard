"use client";
import { useEffect, useMemo, useState } from "react";
import Table from "../../table";
import { AgregarButton } from "../../button/button";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ModalSuppliers from "@/components/modal/suppliers/client";
import { DetailSupplierServices } from "@/services/maintenance/suppliers";

export default function Supplier({product}) {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const open = Boolean(anchorEl);
  const [client, setClient] = useState(null);

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
          <MenuItem onClick={() => handleEdit(row)}>
            <Edit />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Delete />
          </MenuItem>
        </Menu>
      </div>
    );
  };

  const handleEdit = async (row) => {
    const response = await DetailSupplierServices({ client: row.row.original.p_inidproveedor, legal: row.row.original.p_inidjurinat });
    setClient(response[0]);
    setOpenModal(true);
    handleClose();
  };

  return (
    <div className='grid gap-4 items-start'>
      <AgregarButton text='Nueva Tarjeta' className='w-fit' onClick={() => setOpenModal(true)} />
      <Divider />
      <Table
        columns={columns}
        data={data}
        renderRowActions={renderRowActions}
      />
      <ModalSuppliers open={openModal} setOpen={setOpenModal} title='Mantenimiento de Proveedor' client={client} setData={setData} />
    </div>
  );
}
