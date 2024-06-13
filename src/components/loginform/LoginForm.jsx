"use client";
import { TbMailFilled } from "react-icons/tb";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [state, formAction] = useFormState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      action={handleSubmit(formAction)}
      className='flex flex-col gap-5'
    >
      <FormControl
        variant='outlined'
        color={errors.username ? "error" : "primary"}
      >
        <InputLabel htmlFor='outlined-adornment-email'>Email</InputLabel>
        <OutlinedInput
          id='outlined-adornment-email'
          type='email'
          error={errors.username}
          {...register("username", { required: true })}
          startAdornment={
            <InputAdornment position='end'>
              <IconButton aria-label='username' edge='start'>
                <TbMailFilled />
              </IconButton>
            </InputAdornment>
          }
          label='Email'
        />
      </FormControl>
      <FormControl
        variant='outlined'
        color={errors.password ? "error" : "primary"}
      >
        <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
        <OutlinedInput
          id='outlined-adornment-password'
          error={errors.password}
          type={showPassword ? "text" : "password"}
          {...register("password", { required: true })}
          startAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label='toggle password visibility'
                onClick={() => setShowPassword(!showPassword)}
                edge='start'
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label='Password'
        />
      </FormControl>
      <Button size='large' type='submit' variant='contained'>
        Login
      </Button>
      {state && state}
    </form>
  );
}
