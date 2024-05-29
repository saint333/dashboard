"use client";
import Table from "@/components/table";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Divider,
  MenuItem,
  TextField,
} from "@mui/material";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import SaveIcon from "@mui/icons-material/Save";

export default function Quick() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  return (
    <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 grid-rows-[auto] items-start'>
      <Card>
        <CardContent>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={["Movie 1", "Movie 2", "Movie 3"]}
            size='small'
            fullWidth
            noOptionsText='No hay opciones'
            renderInput={(params) => <TextField {...params} label='Movie' />}
          />
          <Table columns={columns} enableGlobalFilter={false} />
        </CardContent>
      </Card>
      <div className='flex flex-col gap-3'>
        <Card>
          <CardContent>
            <div className='flex gap-3 flex-col'>
              <div className='flex gap-3 flex-col md:flex-row'>
                <TextField
                  label='Tipo de documento'
                  size='small'
                  fullWidth
                  error={errors.document}
                  helperText={
                    errors.document ? "Este campo es requerido" : null
                  }
                  {...register("document", { required: true })}
                  select
                  defaultValue={""}
                >
                  <MenuItem disabled value=''>
                    -
                  </MenuItem>
                  <MenuItem value='DNI'>DNI</MenuItem>
                  <MenuItem value='RUC'>RUC</MenuItem>
                </TextField>

                <TextField
                  label='Correlativo'
                  size='small'
                  fullWidth
                  error={errors.number}
                  helperText={errors.number ? "Este campo es requerido" : null}
                  {...register("number", { required: true })}
                />
              </div>
              <div className='flex gap-3 flex-col md:flex-row'>
                <TextField
                  label='Fecha'
                  size='small'
                  fullWidth
                  type='date'
                  InputLabelProps={{ shrink: true }}
                  error={errors.date}
                  helperText={errors.date ? "Este campo es requerido" : null}
                  {...register("date", { required: true })}
                />
                <TextField
                  label='Pedido'
                  size='small'
                  fullWidth
                  error={errors.order}
                  helperText={errors.order ? "Este campo es requerido" : null}
                  {...register("order", { required: true })}
                />
              </div>
              <div className='flex gap-3 flex-col md:flex-row'>
                <TextField
                  label='Moneda'
                  size='small'
                  fullWidth
                  error={errors.currency}
                  helperText={
                    errors.currency ? "Este campo es requerido" : null
                  }
                  {...register("currency", { required: true })}
                  select
                  defaultValue={""}
                >
                  <MenuItem disabled value=''>
                    -
                  </MenuItem>
                  <MenuItem value='PEN'>Soles</MenuItem>
                  <MenuItem value='USD'>Dolares</MenuItem>
                </TextField>
                <TextField
                  label='Tipo cambio'
                  size='small'
                  fullWidth
                  error={errors.exchange}
                  helperText={
                    errors.exchange ? "Este campo es requerido" : null
                  }
                  {...register("exchange", { required: true })}
                />
                <TextField
                  label='IGV'
                  size='small'
                  fullWidth
                  error={errors.igv}
                  helperText={errors.igv ? "Este campo es requerido" : null}
                  {...register("igv", { required: true })}
                />
              </div>
              <Autocomplete
                disablePortal
                id='combo-box-client'
                options={["Movie 1", "Movie 2", "Movie 3"]}
                size='small'
                fullWidth
                noOptionsText='No hay opciones'
                renderInput={(params) => (
                  <TextField
                  label='Cliente RUC/DNI/OTROS'
                  error={errors.client}
                  helperText={
                    errors.client ? "Este campo es requerido" : null
                  }
                  {...register("client", { required: true })}
                  {...params}
                  />
                )}
              />
              <div className='flex gap-3 flex-col md:flex-row'>
                <TextField
                  label='Licencia'
                  size='small'
                  fullWidth
                  error={errors.license}
                  helperText={errors.license ? "Este campo es requerido" : null}
                  {...register("license", { required: true })}
                  select
                  defaultValue={""}
                >
                  <MenuItem disabled value=''>
                    -
                  </MenuItem>
                  <MenuItem value='DNI'>DNI</MenuItem>
                  <MenuItem value='RUC'>RUC</MenuItem>
                </TextField>
                <TextField
                  label='Tarjeta'
                  size='small'
                  fullWidth
                  error={errors.card}
                  helperText={errors.card ? "Este campo es requerido" : null}
                  {...register("card", { required: true })}
                  select
                  defaultValue={""}
                >
                  <MenuItem disabled value=''>
                    -
                  </MenuItem>
                  <MenuItem value='DNI'>DNI</MenuItem>
                  <MenuItem value='RUC'>RUC</MenuItem>
                </TextField>
                <TextField
                  label='Resolucion'
                  size='small'
                  fullWidth
                  error={errors.resolution}
                  helperText={
                    errors.resolution ? "Este campo es requerido" : null
                  }
                  {...register("resolution", { required: true })}
                  select
                  defaultValue={""}
                >
                  <MenuItem disabled value=''>
                    -
                  </MenuItem>
                  <MenuItem value='DNI'>DNI</MenuItem>
                  <MenuItem value='RUC'>RUC</MenuItem>
                </TextField>
              </div>
            </div>
            <Divider className='!my-3' />
            <p className='flex justify-between'>
              <span>Sub Total</span>
              <span>S/ 0.00</span>
            </p>
            <p className='flex justify-between'>
              <span>Total Descuento</span>
              <span>S/ 0.00</span>
            </p>
            <p className='flex justify-between'>
              <span>Valor Venta</span>
              <span>S/ 0.00</span>
            </p>
            <p className='flex justify-between'>
              <span>IGV</span>
              <span>S/ 0.00</span>
            </p>
          </CardContent>
        </Card>
        <Card className='border-t-4 border-teal-500'>
          <CardContent>
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <span style={{ color: "#74829c" }}>Total Compra</span>
                <span>S/ 0.00</span>
              </div>
              <Button
                color='success'
                endIcon={<SaveIcon />}
                variant='contained'
                onClick={handleSubmit(onSubmit)}
              >
                Procesar Venta
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
