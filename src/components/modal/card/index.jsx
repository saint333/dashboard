import React from "react";
import ModalBasic from "..";
import { MenuItem, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { CancelButton, SaveButton } from "@/components/button/button";

export default function ModalCard({ open, setOpen, title }) {
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
        <legend>Datos de la Tarjeta</legend>
        <div className='flex gap-3 flex-col md:flex-row'>
          <TextField
            label='N° Tarjeta'
            variant='outlined'
            size='small'
            fullWidth
            error={errors.number}
            helperText={errors.number ? "Este campo es requerido" : null}
            {...register("number", { required: true })}
          />
          <TextField
            label='Modalidad'
            variant='outlined'
            size='small'
            fullWidth
            select
            error={errors.modality}
            helperText={errors.modality ? "Este campo es requerido" : null}
            {...register("modality", { required: true })}
          >
            <MenuItem value=''>-</MenuItem>
            <MenuItem value='Credito'>Credito</MenuItem>
            <MenuItem value='Debito'>Debito</MenuItem>
          </TextField>
        </div>
      </fieldset>
      <fieldset
        style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
        className="flex flex-col gap-3"
      >
        <legend>Datos del Arma</legend>
        <div className='flex gap-3 flex-col md:flex-row'>
          <TextField
            label='Tipo'
            variant='outlined'
            size='small'
            fullWidth
            error={errors.type}
            helperText={errors.type ? "Este campo es requerido" : null}
            {...register("type", { required: true })}
          />
          <TextField
            label="Modelo"
            variant="outlined"
            size="small"
            fullWidth
            error={errors.model}
            helperText={errors.model ? "Este campo es requerido" : null}
            {...register("model", { required: true })}
          />
        </div>
        <div className='flex gap-3 flex-col md:flex-row'>
          <TextField
            label="Marca"
            variant="outlined"
            size="small"
            fullWidth
            error={errors.brand}
            helperText={errors.brand ? "Este campo es requerido" : null}
            {...register("brand", { required: true })}
          />
          <TextField
            label="Calibre"
            variant="outlined"
            size="small"
            fullWidth
            error={errors.caliber}
            helperText={errors.caliber ? "Este campo es requerido" : null}
            {...register("caliber", { required: true })}
          />
        </div>
        <div className='flex gap-3 flex-col md:flex-row'>
          <TextField
            label="Serie"
            variant="outlined"
            size="small"
            fullWidth
            error={errors.serial}
            helperText={errors.serial ? "Este campo es requerido" : null}
            {...register("serial", { required: true })}
          />
          <div className="hidden md:block w-full"></div>
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
  );
}
