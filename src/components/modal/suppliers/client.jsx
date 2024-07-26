import { useEffect, useState } from "react";
import ModalBasic from "..";
import {
  Autocomplete,
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
import { commonServices } from "@/services";
import { ubigeo } from "@/util/ubigeo";
import { prueba } from "@/app/dashboard/maintenance/suppliers/page";

export default function ModalSuppliers({ open, setOpen, title, setData , client }) {
  const [value, setValue] = useState(0);
  const [paises, setPaises] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const defaultValues = {
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
    proceso: value === 0 ? "PERSONA" : "EMPRESA",
    p_inidempresa: null,
    p_inidpersona: 0,
    p_inidjurinat: value === 0 ? 1 : 2,
    p_inidproveedor: 0,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue: setFormValue,
  } = useForm({
    defaultValues
  });

  const handleChange = (event, newValue) => {
    reset();
    setValue(newValue);
  };

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    const letterAccion = "I";
    const list = await prueba(data, letterAccion);
    setData(list);
    handleClose();
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
    reset(defaultValues);
    setOpen(false);
    setInputValue(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      const persona = await commonServices({ letterAccion: 15 });
      const pais = await commonServices({ letterAccion: 17 });
      setCliente(persona);
      setPaises(pais);
    };
    fetchData();
  }, []);

  useEffect(() => {
    client && setInputValue(client.p_inidubigeo);
    client && reset(client);
  }, [client, reset]);

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
            cliente={cliente}
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
            <Autocomplete
              freeSolo
              id='free-solo-2-demo'
              disableClearable
              value={ubigeo.find((option) => option.p_inidubigeo === inputValue) || null}
              onChange={(event, newValue) => {
                setInputValue(newValue.p_inidubigeo);
                setFormValue('p_inidubigeo', newValue.p_inidubigeo);
              }}
              options={ubigeo}
              getOptionLabel={(option) => option.chdepartamento + ' - ' + option.chprovincia + ' - ' + option.chdistrito}
              size="small"
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Ubigeo'
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  error={errors.p_inidubigeo}
                  InputLabelProps={{error: errors.p_inidubigeo}}
                />
              )}
            />
            <CustomSelect
              label='Pais'
              textKey='p_inidpais'
              handleChange={() => {}}
            >
              {paises.map((item) => (
                <MenuItem
                  key={item.p_inidmaestrodetalle}
                  value={item.p_inidmaestrodetalle}
                >
                  {item.chmaestrodetalle}
                </MenuItem>
              ))}
            </CustomSelect>
          </fieldset>
        </Box>
      </Box>
    </ModalBasic>
  );
}
