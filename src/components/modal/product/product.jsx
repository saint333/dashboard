import { Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import ModalBasic from '..'
import CustomTabPanel, { a11yProps } from '@/components/tabs/tabs';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useForm } from 'react-hook-form';
import Service from './tabs/services';
import { CancelButton, SaveButton } from '@/components/button/button';

export default function ModalProduct({ open, setOpen, title }) {
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
              icon={<SettingsIcon />}
              iconPosition='start'
              className="!min-h-[50px]"
              {...a11yProps(0)}
            />
            <Tab
              label='Empresa'
              iconPosition='start'
              icon={<FilterAltIcon />}
              className="!min-h-[50px]"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Service errors={errors} register={register}/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        </CustomTabPanel>
      </Box>
    </ModalBasic>
  )
}
