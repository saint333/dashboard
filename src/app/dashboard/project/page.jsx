"use client";
import ModalCard from "@/components/modal/card";
import ModalClient from "@/components/modal/client/client";
import ModalLicense from "@/components/modal/license/license";
import ModalProduct from "@/components/modal/product/product";
import ModalResolution from "@/components/modal/resolution/resolution";
import Table from "@/components/table";
import { data } from "@/mock/table";
import { Card, CardContent, MenuItem } from "@mui/material";
import React, { useMemo, useState } from "react";

export default function Project() {
  const [datas, setDatas] = useState(data);
  const [open, setOpen] = useState(false);
  const renderRowActionMenuItems = ({ closeMenu, row }) => [
    <MenuItem
      key={0}
      onClick={() => {
        closeMenu();
        setOpen(true);
      }}
    >
      Rol
    </MenuItem>,
    <MenuItem
      key={1}
      onClick={() => {
        closeMenu();
      }}
    >
      Editar
    </MenuItem>,
  ];
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  return (
    <>
      <Card>
        <CardContent>
          <Table
            columns={columns}
            data={datas}
            renderRowActionMenuItems={renderRowActionMenuItems}
          />
        </CardContent>
      </Card>
      {/* {open && (
        <ModalClient open={open} setOpen={setOpen} title='Mantenimiento de Cliente'/>
      )} */}
      {
        open && <ModalLicense open={open} setOpen={setOpen} title="Mantenimiento de licencia" />
      }
      {/* {
        open && <ModalCard open={open} setOpen={setOpen} title="Mantenimiento de tarjeta" />
      } */}
      {/* {
        open && <ModalResolution open={open} setOpen={setOpen} title="Mantenimiento de resolución" />
      } */}
      {/* {open && (
        <ModalClient open={open} setOpen={setOpen} title='Mantenimiento del Proveedor'/>
      )} */}
      {/* {
        open && <ModalProduct open={open} setOpen={setOpen} title="Mantenimiento de prodycto" />
      } */}
    </>
  );
}
