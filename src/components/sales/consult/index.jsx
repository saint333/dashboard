"use client";
import { useEffect, useMemo, useState } from "react";
import Table from "../../table";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Delete, Print, Visibility } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ConsultModal from "@/components/modal/print/consult";

export default function ConsultTable({product}) {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setData([
      {
        chcodigoproveedor: "123456",
        razon: "Cesar",
        chtipodocumento: "DNI",
        chnrodocumento: "12345678",
        chdireccion: "Av. Los Pinos",
        chtelefono: "123456789",
        chemail: ""
      }
    ]);
  }, [product]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "chcodigoproveedor",
        header: "T.DOC",
        size: 150,
      },
      {
        accessorKey: "razon",
        header: "N° DOC",
        size: 150,
      },
      {
        accessorKey: "chtipodocumento",
        header: "CLIENTE",
        size: 200,
      },
      {
        accessorKey: "chnrodocumento",
        header: "TIPO DOCUMENTO",
        size: 150,
      },
      {
        accessorKey: "chdireccion",
        header: "DOCUMENTO",
        size: 150,
      },
      {
        accessorKey: "chtelefono",
        header: "FECHA EMISION",
        size: 150,
      },
      {
        accessorKey: "chemail",
        header: "MONEDA",
        size: 150,
      },
      {
        accessorKey: "chcontacto",
        header: "IMPORTE",
        size: 150,
      },
      {
        accessorKey: "chtelefonocontacto",
        header: "ESTADO",
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
            <Visibility />
          </MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            setOpenModal(true);
          }}>
            <Print />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Delete />
          </MenuItem>
        </Menu>
      </div>
    );
  };

  return (
    <>
    <Table
      columns={columns}
      data={data}
      renderRowActions={renderRowActions}
    />
    <ConsultModal open={openModal} setOpen={setOpenModal} title='Facturación Electronica - Salva la Amazonia con tus facturas' />
    </>
  );
}
