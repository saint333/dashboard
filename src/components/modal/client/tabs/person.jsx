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
        <CustomSelect label='Documento' textKey='p_inidtipodocumento' >
          <MenuItem value='54'>DNI</MenuItem>
          <MenuItem value='RUC'>RUC</MenuItem>
        </CustomSelect>
        <CustomInput label='N° Documento' textKey='chnrodocumento' />
      </div>
      <div className='flex gap-3 flex-col md:flex-row'>
        <CustomInput label='Ap. Paterno' textKey='chapellidopaterno' />
        <CustomInput label='Ap. Materno' textKey='chapellidomaterno' />
      </div>
      <CustomInput label='Nombres' textKey='chnombres' />
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
          {...register("chfechanacimiento", { required: true })}
        />
        <CustomSelect label='Sexo' textKey='p_inidtiposexo'>
          <MenuItem value='58'>Masculino</MenuItem>
          <MenuItem value='59'>Femenino</MenuItem>
        </CustomSelect>
      </div>
    </div>
  );
}
