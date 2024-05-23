import React from 'react'
import ModalBasic from "..";
import { MenuItem, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CancelButton, SaveButton } from '@/components/button/button';

export default function ModalResolution({ open, setOpen, title }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };
  return (
    <ModalBasic
      open={open}
      handleClose={() => setOpen(false)}
      title={title}
      actions={
        <div className='flex gap-2 justify-end'>
          <CancelButton text='Cancelar' onClick={() => setOpen(false)} />
          <SaveButton text='Guardar' onClick={handleSubmit(onSubmit)} />
        </div>
      }
    > 
      <div className="flex flex-col gap-3">
      <fieldset
        style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
      >
        <legend>Datos de la Resolución</legend>
        <div className='flex gap-3 flex-col md:flex-row'>
          <TextField
            label='N° Resolución'
            variant='outlined'
            size='small'
            fullWidth
            error={errors.resolution}
            helperText={errors.resolution ? "Este campo es requerido" : null}
            {...register("resolution", { required: true })}
          />
          <TextField
            label='F. Vencimiento'
            variant='outlined'
            size='small'
            fullWidth
            InputLabelProps={{ shrink: true }}
            error={errors.date}
            type='date'
            helperText={errors.date ? "Este campo es requerido" : null}
            {...register("date", { required: true })}
          />
        </div>
      </fieldset>
      <fieldset
        style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
      >
        <legend>Datos del Cliente</legend>
          <TextField
            label='Cliente'
            variant='outlined'
            size='small'
            fullWidth
            select
            error={errors.client}
            helperText={errors.client ? "Este campo es requerido" : null}
            {...register("client", { required: true })}
          >
            <MenuItem value=''>-</MenuItem>
            <MenuItem value='Credito'>Credito</MenuItem>
            <MenuItem value='Debito'>Debito</MenuItem>
          </TextField>
      </fieldset>
      </div>
    </ModalBasic>
  )
}
