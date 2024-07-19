import { useState } from "react";
import ModalBasic from "..";
import { Box, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import Person from "./tabs/person";
import Company from "./tabs/company";
import { Controller, useForm } from "react-hook-form";
import DescriptionIcon from "@mui/icons-material/Description";
import RoomIcon from "@mui/icons-material/Room";
import CustomTabPanel, { a11yProps } from "@/components/tabs/tabs";
import { CancelButton, SaveButton } from "@/components/button/button";

export default function ModalSuppliers({ open, setOpen, title }) {
  const [value, setValue] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    defaultValues: {
      ruc: "",
      numberComercial: "",
      social: "",
      email: "",
      phone: "",
      name: "",
      address: "",
      ubigeo: "",
      country: "",
      document: "",
      documentNumber: "",
      lastNameP: "",
      lastNameM: "",
      date: "",
      sex: "",
    },
  });

  const handleChange = (event, newValue) => {
    reset();
    setValue(newValue);
  };

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
  }

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
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab
              label='Persona'
              icon={<PersonIcon />}
              iconPosition='start'
              className='!min-h-[50px]'
              {...a11yProps(0)}
            />
            <Tab
              label='Empresa'
              iconPosition='start'
              icon={<BusinessIcon />}
              className='!min-h-[50px]'
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Person register={register} errors={errors} CustomInput={CustomInput} CustomSelect={CustomSelect}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Company register={register} errors={errors} CustomInput={CustomInput} CustomSelect={CustomSelect}/>
        </CustomTabPanel>
        <Box sx={{ pt: 2 }}>
          <fieldset
            style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
          >
            <legend>
              <DescriptionIcon color='primary' /> Datos Adicionales
            </legend>
            <div className='flex gap-3 flex-col md:flex-row'>
              <CustomInput label='Telefono' textKey='phone' />
              <CustomInput label='Correo' textKey='email' />
            </div>
          </fieldset>
        </Box>
        <Box sx={{ pt: 2 }}>
          <fieldset
            style={{
              border: "1px solid rgba(0, 0, 0, 0.23)",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <legend>
              <RoomIcon color='primary' /> Datos de dirección
            </legend>
            <CustomInput label='Direccion' textKey='address' />
            <CustomSelect
              label='Ubigeo'
              textKey='ubigeo'
              handleChange={() => {}}
            >
            </CustomSelect>
            <CustomSelect
              label='Pais'
              textKey='country'
              handleChange={() => {}}
            >
            </CustomSelect>
          </fieldset>
        </Box>
      </Box>
    </ModalBasic>
  );
}
