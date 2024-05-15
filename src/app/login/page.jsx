"use client";
import { useAuthProvider } from "@/context/auth/AuthContext";
import { authCase } from "@/context/common/AuthConstants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbMailFilled } from "react-icons/tb";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [{ user }, dispatch] = useAuthProvider();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);
  const onSubmit = (data) => {
    dispatch({ type: authCase.LOGIN, user: data });
    router.push("/dashboard");
  };
  return (
    <Card>
      <CardContent>
        <CardHeader title='Login' className='text-center' />
        <CardContent>
          <form
            className='flex flex-col gap-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl
              variant='outlined'
              color={errors.email ? "error" : "primary"}
            >
              <InputLabel htmlFor='outlined-adornment-email'>Email</InputLabel>
              <OutlinedInput
                id='outlined-adornment-email'
                type='email'
                error={errors.email}
                {...register("email", { required: true })}
                startAdornment={
                  <InputAdornment position='end'>
                    <IconButton aria-label='email' edge='start'>
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
              <InputLabel htmlFor='outlined-adornment-password'>
                Password
              </InputLabel>
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
          </form>
        </CardContent>
      </CardContent>
    </Card>
  );
}

export default Login;
