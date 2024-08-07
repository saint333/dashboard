"use client";
import Table from "@/components/table";
import { MoreHoriz, Visibility } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

export default function KardexTable({ product }) {
  console.log("🚀 ~ KardexTable ~ product:", product)
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

  const columns = useMemo(
    () => [
      {
        accessorKey: "chcodigoproveedor",
        header: "CATEGORIA",
        size: 150,
      },
      {
        accessorKey: "razon",
        header: "CODIGO",
        size: 150,
      },
      {
        accessorKey: "chtipodocumento",
        header: "DESCRIPCION",
        size: 200,
      },
      {
        accessorKey: "chnrodocumento",
        header: "UNIDAD MEDIDA",
        size: 150,
      },
      {
        accessorKey: "chdireccion",
        header: "STOCK",
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
          <MoreHoriz />
        </IconButton>
        <Menu
          id='long-menu'
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PopoverClasses={{ paper: "!shadow-lg" }}
        >
          <MenuItem onClick={handleClose}>
            <Visibility />
          </MenuItem>
        </Menu>
      </div>
    );
  };
  return (
    <Table columns={columns} data={data} renderRowActions={renderRowActions} />
  );
}
