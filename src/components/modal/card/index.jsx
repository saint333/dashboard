import React from "react";
import ModalBasic from "..";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { CancelButton, SaveButton } from "@/components/button/button";

export default function ModalCard({ open, setOpen, title }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      number: "",
      modality: "",
      type: "",
      brand: "",
      serial: "",
      model: "",
      caliber: "",
      client: "",
    },
  });

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  const CustomInput = ({ label, textKey }) => (
    <Controller
      name={textKey}
      control={control}
      rules={{ required: "Este campo es requerido" }}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={errors[textKey]}
          fullWidth
          size='small'
        />
      )}
    />
  );

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
      <div className='flex flex-col gap-3'>
        <fieldset
          style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
        >
          <legend>Datos de la Tarjeta</legend>
          <div className='flex gap-3 flex-col md:flex-row'>
            <CustomInput label='N° Tarjeta' textKey='number' />
            <CustomSelect
              label='Modalidad'
              textKey='modality'
              handleChange={() => null}
            >
              <MenuItem value='Credito'>Credito</MenuItem>
              <MenuItem value='Debito'>Debito</MenuItem>
            </CustomSelect>
          </div>
        </fieldset>
        <fieldset
          style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
          className='flex flex-col gap-3'
        >
          <legend>Datos del Arma</legend>
          <div className='flex gap-3 flex-col md:flex-row'>
            <CustomInput label='Tipo' textKey='type' />
            <CustomInput label='Modelo' textKey='model' />
          </div>
          <div className='flex gap-3 flex-col md:flex-row'>
            <CustomInput label='Marca' textKey='brand' />
            <CustomInput label='Calibre' textKey='caliber' />
          </div>
          <div className='flex gap-3 flex-col md:flex-row'>
            <CustomInput label='Serie' textKey='serial' />
            <div className='hidden md:block w-full'></div>
          </div>
        </fieldset>
        <fieldset
          style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
        >
          <legend>Datos del Cliente</legend>
          <CustomSelect
            label='Cliente'
            textKey='client'
            handleChange={() => null}
          >
            <MenuItem value='Credito'>Credito</MenuItem>
            <MenuItem value='Debito'>Debito</MenuItem>
          </CustomSelect>
        </fieldset>
      </div>
    </ModalBasic>
  );
}
