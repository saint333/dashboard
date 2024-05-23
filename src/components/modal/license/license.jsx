import React from "react";
import ModalBasic from "..";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { CancelButton, SaveButton } from "@/components/button/button";

export default function ModalLicense({ open, setOpen, title }) {
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
      <Box
        sx={{ width: "100%" }}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-3 mb-3'
      >
        <div className='flex flex-col gap-3 md:flex-row'>
          <TextField
            label='N° Licencia'
            variant='outlined'
            size='small'
            fullWidth
            error={errors.license}
            helperText={errors.license ? "Este campo es requerido" : null}
            {...register("license", { required: true })}
          />
          <TextField
            label='F. Vencimiento'
            variant='outlined'
            size='small'
            InputLabelProps={{ shrink: true }}
            fullWidth
            type='date'
            error={errors.date}
            helperText={errors.date ? "Este campo es requerido" : null}
            {...register("date", { required: true })}
          />
        </div>
        <div>
          <FormLabel component='legend'>Modalidades</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='Defensa Personal' />
            <FormControlLabel control={<Checkbox />} label='Caza' />
            <FormControlLabel control={<Checkbox />} label='Deporte' />
            <FormControlLabel
              control={<Checkbox />}
              label='Seguridad Privada'
            />
            <FormControlLabel control={<Checkbox />} label='Sispe' />
          </FormGroup>
        </div>
        <TextField
          label='Tipo Cliente'
          {...register("client", { required: true })}
          fullWidth
          size='small'
          select
          defaultValue={""}
          error={errors.client}
          helperText={errors.client ? "Este campo es requerido" : null}
        >
          <MenuItem value=''>-</MenuItem>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </TextField>
      </Box>
    </ModalBasic>
  );
}
