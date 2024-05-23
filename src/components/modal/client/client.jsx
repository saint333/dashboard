import React, { useState } from "react";
import ModalBasic from "..";
import {
  Box,
  MenuItem,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import Person from "./tabs/person";
import Company from "./tabs/company";
import { useForm } from "react-hook-form";
import DescriptionIcon from '@mui/icons-material/Description';
import RoomIcon from '@mui/icons-material/Room';
import CustomTabPanel, { a11yProps } from "@/components/tabs/tabs";
import { CancelButton, SaveButton } from "@/components/button/button";

export default function ModalClient({ open, setOpen, title }) {
  const [value, setValue] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              className="!min-h-[50px]"
              {...a11yProps(0)}
            />
            <Tab
              label='Empresa'
              iconPosition='start'
              icon={<BusinessIcon />}
              className="!min-h-[50px]"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Person register={register} errors={errors} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Company register={register} errors={errors} />
        </CustomTabPanel>
        <Box sx={{ pt: 2 }}>
          <fieldset
            style={{ border: "1px solid rgba(0, 0, 0, 0.23)", padding: "10px" }}
          >
            <legend><DescriptionIcon color='primary'/> Datos Adicionales</legend>
            <div className='flex gap-3 flex-col md:flex-row'>
              <TextField
                label='Telefono'
                {...register("phone", { required: true })}
                fullWidth
                size='small'
                error={errors.phone}
                helperText={errors.phone ? "Este campo es requerido" : null}
              />
              <TextField
                label='Correo'
                {...register("email", { required: true })}
                fullWidth
                size='small'
                error={errors.email}
                helperText={errors.email ? "Este campo es requerido" : null}
              />
            </div>
            <div className='flex mt-3 gap-3 flex-col md:flex-row'>
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
            <legend><RoomIcon color='primary'/> Datos de dirección</legend>
            <TextField
              label='Dirección'
              {...register("address", { required: true })}
              fullWidth
              size='small'
              error={errors.address}
              helperText={errors.address ? "Este campo es requerido" : null}
            />
            <TextField
              label='Ciudad'
              {...register("city", { required: true })}
              fullWidth
              size='small'
              error={errors.city}
              helperText={errors.city ? "Este campo es requerido" : null}
            />
            <TextField
              label='Pais'
              {...register("country", { required: true })}
              fullWidth
              size='small'
              error={errors.country}
              helperText={errors.country ? "Este campo es requerido" : null}
            />
          </fieldset>
        </Box>
      </Box>
    </ModalBasic>
  );
}
