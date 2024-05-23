import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
} from "@mui/material";
import React from "react";

export default function Service({ register, errors }) {
  return (
    <div className='flex gap-3 flex-col'>
      <div className='flex flex-col gap-3 md:flex-row'>
        <TextField
          label='Categoria'
          {...register("category", { required: true })}
          error={errors.category}
          helperText={errors.category ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
        <TextField
          label='Codigó'
          {...register("code", { required: true })}
          error={errors.code}
          helperText={errors.code ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          defaultValue={""}
        />
      </div>
      <div className='flex flex-col gap-3 md:flex-row'>
        <TextField
          label='Tipo'
          {...register("type", { required: true })}
          error={errors.type}
          helperText={errors.type ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
        <TextField
          label='Marca'
          {...register("brand", { required: true })}
          error={errors.brand}
          helperText={errors.brand ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
      </div>
      <div className='flex flex-col gap-3 md:flex-row'>
        <TextField
          label='Modelo'
          {...register("model", { required: true })}
          error={errors.model}
          helperText={errors.model ? "Este campo es requerido" : null}
          defaultValue={""}
          fullWidth
          size='small'
          select
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
        <TextField
          label='Calibre'
          {...register("caliber", { required: true })}
          error={errors.caliber}
          helperText={errors.caliber ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
      </div>
      <div className='flex flex-col gap-3 md:flex-row'>
        <TextField
          label='Acabado'
          {...register("finish", { required: true })}
          error={errors.finish}
          helperText={errors.finish ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
        <TextField
          label='Capacidad'
          {...register("capacity", { required: true })}
          error={errors.capacity}
          helperText={errors.capacity ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
      </div>
      <TextField
        label='Descripción'
        {...register("description", { required: true })}
        fullWidth
        size='small'
        error={errors.description}
        helperText={errors.description ? "Este campo es requerido" : null}
      />
      <div className='flex flex-col gap-3 md:flex-row'>
        <TextField
          label='Medida'
          {...register("measure", { required: true })}
          error={errors.measure}
          helperText={errors.measure ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
        <TextField
          label='Situación'
          {...register("situation", { required: true })}
          error={errors.situation}
          helperText={errors.situation ? "Este campo es requerido" : null}
          fullWidth
          size='small'
          select
          defaultValue={""}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
      </div>
      <FormGroup className="!flex-row">
        <FormControlLabel control={<Checkbox />} label='Label' />
        <FormControlLabel control={<Checkbox />} label='Required' />
        <FormControlLabel control={<Checkbox />} label='Disabled' />
      </FormGroup>
    </div>
  );
}
