import { MenuItem, TextField } from "@mui/material";

export const CustomInput = ({
  label,
  errors,
  register,
  registeroption,
  textKey,
  ...props
}) => {
  return (
    <TextField
      label={label}
      size='small'
      fullWidth
      error={errors[textKey]}
      helperText={errors[textKey] ? "Este campo es requerido" : null}
      {...register(textKey, { required: true, ...registeroption })}
      {...props}
    />
  );
};

export const CustomSelect = ({
  label,
  errors,
  register,
  registeroption,
  textKey,
  options = null,
  ...props
}) => {
  return (
    <TextField
      label={label}
      size='small'
      fullWidth
      error={errors[textKey]}
      helperText={errors[textKey] ? "Este campo es requerido" : null}
      {...register(textKey, { required: true , ...registeroption })}
      select
      defaultValue={""}
      {...props}
    >
      <MenuItem disabled value=''>
        -
      </MenuItem>
      {options && options.map((option) => <MenuItem key={option} value={option}>{option}</MenuItem>)}
    </TextField>
  );
};
