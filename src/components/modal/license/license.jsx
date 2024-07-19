import React from "react";
import ModalBasic from "..";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { CancelButton, SaveButton } from "@/components/button/button";

export default function ModalLicense({ open, setOpen, title }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      license: "",
      date: "",
      client: "",
    },
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  const CustomSelect = ({ label, textKey, handleChange, children }) => {
    return (
      <Controller
        name={textKey}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth size='small'>
            <InputLabel id={`role-${textKey}-label`} error={errors[textKey]}>
              {label}
            </InputLabel>
            <Select
              {...field}
              labelId={`role-${textKey}-label`}
              label={label}
              error={errors[textKey]}
              onChange={(e) => {
                field.onChange(e);
                handleChange(e);
              }}
            >
              <MenuItem value=''>-</MenuItem>
              {children}
            </Select>
          </FormControl>
        )}
        rules={{ required: "Este campo es requerido" }}
      />
    );
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  return (
    <ModalBasic
      open={open}
      handleClose={handleClose}
      title={title}
      actions={
        <div className='flex gap-2 justify-end'>
          <CancelButton text='Cancelar' onClick={handleClose} />
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
        <CustomSelect label='Tipo Cliente' textKey='client' handleChange={() => null}>
          <MenuItem value='P'>Persona</MenuItem>
          <MenuItem value='E'>Empresa</MenuItem>
        </CustomSelect>
      </Box>
    </ModalBasic>
  );
}
