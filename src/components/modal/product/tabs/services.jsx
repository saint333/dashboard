import { fetchDataProduct } from "@/services/maintenance/product";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function Service({
  register,
  errors,
  category,
  control,
  setFormValue,
}) {
  const [valueSelect, setValueSelect] = useState({
    category: [],
    type: [],
    brand: [],
    model: [],
    caliber: [],
    finish: [],
    capacity: [],
    measure: [],
    situation: [],
  });

  const handleCategory = async (e) => {
    setFormValue("type", "");
    const response = await fetchDataProduct(2, e.target.value);
    setValueSelect({
      ...valueSelect,
      type: response,
    });
  };

  const handleType = async (e) => {
    setFormValue("brand", "");
    const response = await fetchDataProduct(3, e.target.value);
    setValueSelect({
      ...valueSelect,
      brand: response,
    });
  };

  const handleBrand = async (e) => {
    setFormValue("model", "");
    const response = await fetchDataProduct(4, e.target.value);
    setValueSelect({
      ...valueSelect,
      model: response,
    });
  };

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

  return (
    <div className='flex gap-3 flex-col'>
      <div className='flex flex-col gap-3 md:flex-row'>
        <CustomSelect
          label='Categoria'
          textKey='category'
          handleChange={handleCategory}
        >
          {category.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
        <Controller
          name='code'
          control={control}
          rules={{ required: "Este campo es requerido" }}
          render={({ field }) => (
            <TextField
              {...field}
              label='Codigó'
              error={errors.code}
              fullWidth
              size='small'
            />
          )}
        />
      </div>
      <div className='flex flex-col gap-3 md:flex-row'>
        <CustomSelect label='Tipo' textKey='type' handleChange={handleType}>
          {valueSelect.type?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
        <CustomSelect label='Marca' textKey='brand' handleChange={handleBrand}>
          {valueSelect.brand?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
      </div>
      <div className='flex flex-col gap-3 md:flex-row'>
        <CustomSelect label='Modelo' textKey='model'>
          {valueSelect.model?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
        <CustomSelect label='Calibre' textKey='caliber'>
          {valueSelect.caliber?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
      </div>
      <div className='flex flex-col gap-3 md:flex-row'>
        <CustomSelect label='Acabado' textKey='finish'>
          {valueSelect.finish?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
        <CustomSelect label='Capacidad' textKey='capacity'>
          {valueSelect.capacity?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
      </div>
      <Controller
        name='description'
        control={control}
        rules={{ required: "Este campo es requerido" }}
        render={({ field }) => (
          <TextField
            {...field}
            label='Descripción'
            error={errors.description}
            fullWidth
            size='small'
          />
        )}
      />
      {/* <TextField
        label='Descripción'
        {...register("description", { required: true })}
        fullWidth
        size='small'
        error={errors.description}
        helperText={errors.description ? "Este campo es requerido" : null}
      /> */}
      <div className='flex flex-col gap-3 md:flex-row'>
        <CustomSelect label='Medida' textKey='measure'>
          {valueSelect.measure?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
        <CustomSelect label='Situación' textKey='situation'>
          {valueSelect.situation?.map((item, index) => (
            <MenuItem key={index} value={item.p_inidfamiliadetalle}>
              {item.chfamiliadetalle}
            </MenuItem>
          ))}
        </CustomSelect>
      </div>
      <FormGroup className='!flex-row'>
        <FormControlLabel
          control={<Checkbox {...register("requiredserie")} />}
          label='Requiere Serie'
        />
        <FormControlLabel
          control={<Checkbox {...register("web")} />}
          label='Pagina Web'
        />
        <FormControlLabel
          control={<Checkbox {...register("destacado")} />}
          label='Destacado'
        />
      </FormGroup>
    </div>
  );
}
