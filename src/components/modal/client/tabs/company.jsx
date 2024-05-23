import { TextField } from '@mui/material'
import React from 'react'

export default function Company({ register, errors }) {
  return (
    <div className='flex gap-3 flex-col p-[10px]'>
      <TextField label="Ruc" variant="outlined" type="number" size="small" fullWidth error={errors.document} helperText={errors.document ? "Este campo es requerido" : null} {...register("document", { required: true, pattern: /^([0-9]{11})$/, })}/>
      <TextField label="N° Comercial" variant="outlined" size="small" fullWidth error={errors.number} helperText={errors.number ? "Este campo es requerido" : null} {...register("number", { required: true })}/>
      <TextField label="Razon Social" variant="outlined" size="small" fullWidth error={errors.name} helperText={errors.name ? "Este campo es requerido" : null} {...register("name", { required: true })}/>
    </div>
  )
}
