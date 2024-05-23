import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Person({ register, errors }) {
  const [document, setDocument] = useState("");
  return (
    <div className='flex gap-3 flex-col p-[10px]'>
      <div className='flex gap-3 flex-col md:flex-row'>
        <TextField
          label='Documento'
          size='small'
          variant='outlined'
          select
          error={errors.document}
          helperText={errors.document ? "Este campo es requerido" : null}
          value={document}
          className='w-full'
          {...register("document", {
            required: true,
            onChange: (e) => {
              setDocument(e.target.value);
            },
          })}
        >
          <MenuItem value='' disabled>
            -
          </MenuItem>
          <MenuItem value='DNI'>DNI</MenuItem>
          <MenuItem value='RUC'>RUC</MenuItem>
        </TextField>
        <TextField
          size='small'
          label='N° Documento'
          variant='outlined'
          className='w-full'
          error={errors.documentNumber}
          helperText={errors.documentNumber ? "Este campo es requerido" : null}
          defaultValue={""}
          type='number'
          {...register("documentNumber", {
            required: true,
            pattern: /^([0-9]{8}|[0-9]{11})$/,
          })}
        />
      </div>
      <div className='flex gap-3 flex-col md:flex-row'>
        <TextField
          size='small'
          label='Ap. Paterno'
          variant='outlined'
          className='w-full'
          error={errors.lastName}
          helperText={errors.lastName ? "Este campo es requerido" : null}
          defaultValue={""}
          {...register("lastName", { required: true })}
        />
        <TextField
          size='small'
          label='Ap. Materno'
          variant='outlined'
          className='w-full'
          error={errors.lastName}
          helperText={errors.lastName ? "Este campo es requerido" : null}
          defaultValue={""}
          {...register("lastName", { required: true })}
        />
      </div>
      <TextField
        size='small'
        label='Nombres'
        variant='outlined'
        error={errors.name}
        className='w-full'
        helperText={errors.name ? "Este campo es requerido" : null}
        defaultValue={""}
        {...register("name", { required: true })}
      />
      <div className='flex gap-3 flex-col md:flex-row'>
        <TextField
          size='small'
          label='F. Nacimiento'
          type='date'
          variant='outlined'
          className='w-full'
          error={errors.date}
          helperText={errors.date ? "Este campo es requerido" : null}
          defaultValue={""}
          InputLabelProps={{ shrink: true }}
          {...register("date", { required: true })}
        />
        <TextField
          size='small'
          label='Sexo'
          variant='outlined'
          className='w-full'
          error={errors.sex}
          helperText={errors.sex ? "Este campo es requerido" : null}
          defaultValue={""}
          select
          {...register("sex", { required: true })}
        >
          <MenuItem value='' disabled>-</MenuItem>
          <MenuItem value='M'>Masculino</MenuItem>
          <MenuItem value='F'>Femenino</MenuItem>
        </TextField>
      </div>
    </div>
  );
}
