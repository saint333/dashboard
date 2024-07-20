"use client";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

export default function AutocompleteCustom({ data }) {
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={data}
      size='small'
      fullWidth
      noOptionsText='No hay opciones'
      renderInput={(params) => <TextField {...params} label='Movie' />}
    />
  );
}
