import { MenuItem, TextField } from "@mui/material";

export default function Person({
  register,
  errors,
  CustomSelect,
  CustomInput,
}) {
  return (
    <div className='flex gap-3 flex-col p-[10px]'>
      <div className='flex gap-3 flex-col md:flex-row'>
        <CustomSelect label='Documento' textKey='document'>
          <MenuItem value='DNI'>DNI</MenuItem>
          <MenuItem value='RUC'>RUC</MenuItem>
        </CustomSelect>
        <CustomInput label='N° Documento' textKey='documentNumber' />
      </div>
      <div className='flex gap-3 flex-col md:flex-row'>
        <CustomInput label='Ap. Paterno' textKey='lastNameP' />
        <CustomInput label='Ap. Materno' textKey='lastNameM' />
      </div>
      <CustomInput label='Nombres' textKey='name' />
      <div className='flex gap-3 flex-col md:flex-row'>
        <TextField
          size='small'
          label='F. Nacimiento'
          type='date'
          variant='outlined'
          className='w-full'
          error={errors.date}
          helperText={errors.date ? "Este campo es requerido" : null}
          defaultValue={""}
          InputLabelProps={{ shrink: true }}
          {...register("date", { required: true })}
        />
        <CustomSelect label='Sexo' textKey='sex'>
          <MenuItem value='M'>Masculino</MenuItem>
          <MenuItem value='F'>Femenino</MenuItem>
        </CustomSelect>
      </div>
    </div>
  );
}
