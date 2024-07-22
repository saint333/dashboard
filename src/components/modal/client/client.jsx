import { useState } from "react";
import ModalBasic from "..";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import Person from "./tabs/person";
import Company from "./tabs/company";
import { Controller, useForm } from "react-hook-form";
import DescriptionIcon from "@mui/icons-material/Description";
import RoomIcon from "@mui/icons-material/Room";
import CustomTabPanel, { a11yProps } from "@/components/tabs/tabs";
import { CancelButton, SaveButton } from "@/components/button/button";
import { ClientServices } from "@/services/maintenance/client";

export default function ModalClient({ open, setOpen, title }) {
  const [value, setValue] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      chruc: "",
      chnombrecomercial: "",
      chrazonsocial: "",
      chcorreo: "",
      chtelefono: "",
      chnombres: "",
      chdireccion: "",
      p_inidubigeo: "",
      p_inidpais: "",
      p_inidtipodocumento: "",
      chnrodocumento: "",
      chapellidopaterno: "",
      chapellidomaterno: "",
      chfechanacimiento: "",
      p_inidtiposexo: "",
      p_inidcliente: 0,
      p_inidtipocliente: "",
      p_inidjurinat: value === 0 ? 1 : 2,
      p_inidpersona: 0,
      p_inidempresa: null,
      proceso: value === 0 ? "PERSONA" : "EMPRESA",
    },
  });

  const handleChange = (event, newValue) => {
    console.log("🚀 ~ handleChange ~ newValue:", newValue);
    reset();
    setValue(newValue);
  };

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    const letterAccion = "I";
    const response = await ClientServices({
      data,
      letterAccion,
    });
    console.log(response);
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

  const CustomSelect = ({ label, textKey, handleChange = null, children }) => {
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
                handleChange && handleChange(e);
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
          <Person
            register={register}
            errors={errors}
            CustomInput={CustomInput}
            CustomSelect={CustomSelect}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Company
            register={register}
            errors={errors}
            CustomInput={CustomInput}
            CustomSelect={CustomSelect}
          />
        </CustomTabPanel>
        <Box sx={{ pt: 2 }}>
          <fieldset
            style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
          >
            <legend>
              <DescriptionIcon color='primary' /> Datos Adicionales
            </legend>
            <div className='flex gap-3 flex-col md:flex-row'>
              <CustomInput label='Telefono' textKey='chtelefono' />
              <CustomInput label='Correo' textKey='chcorreo' />
            </div>
            <div className='flex mt-3 gap-3 flex-col md:flex-row'>
              <CustomSelect label='Tipo Cliente' textKey='p_inidtipocliente'>
                <MenuItem value='42'>Persona</MenuItem>
                <MenuItem value='E'>Empresa</MenuItem>
              </CustomSelect>
              <div className='w-full hidden md:block'></div>
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
            <CustomInput label='Direccion' textKey='chdireccion' />
            <CustomSelect
              label='Ubigeo'
              textKey='p_inidubigeo'
              handleChange={() => {}}
            >
              <MenuItem value='1'>jij</MenuItem>
            </CustomSelect>
            <CustomSelect
              label='Pais'
              textKey='p_inidpais'
              handleChange={() => {}}
            >
              <MenuItem value='283'>jij</MenuItem>
            </CustomSelect>
          </fieldset>
        </Box>
      </Box>
    </ModalBasic>
  );
}
