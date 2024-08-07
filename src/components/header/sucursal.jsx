import { SucursalData } from "@/services";
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const SucursalComponent = ({session}) => {
  const [domain, setDomain] = useState(null);
  const {
    formState: { errors },
    control,
    setValue
  } = useForm({
    defaultValues: {
      sucursal: "",
    },
  });

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await SucursalData(session);
      setDomain(data);
      setValue("sucursal", data.p_iniddominio_default);
    };
    fetchData();
  }, [session, setValue]);

  if (!domain) {
    return <Skeleton width={200} height={65}/>
  }
  return (
    <CustomSelect label='Sucursales' textKey='sucursal'>
      {domain.map((item) => (
        <MenuItem key={item.p_inidsucursal} value={item.p_inidsucursal}>
          {item.chnombre}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default SucursalComponent;
