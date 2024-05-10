"use client";
import { useAuthProvider } from "@/context/auth/AuthContext";
import { authCase } from "@/context/common/AuthConstants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbMailFilled } from "react-icons/tb";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

function Login() {
  const [{ user }, dispatch] = useAuthProvider();
  const { register, handleSubmit, formState: { errors } } = useForm();
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
  }
  return (
    <div className='bg-white rounded-lg p-5 text-black mt-5'>
      <h4 className='text-center pb-5 text-xl'>Login</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-center border border-gray-400 rounded-md overflow-hidden'>
          <label htmlFor='username' className='p-2'>
            <TbMailFilled className='text-gray-500' />
          </label>
          <input
            type='email'
            placeholder='Email'
            className='p-2 outline-none border-l border-gray-400'
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        {errors.email && <p className='text-red-500 block'>This field is required</p>}
        <div className='flex mt-5 items-center border border-gray-400 rounded-md overflow-hidden'>
          <label htmlFor='password' className='p-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Password'
            className='p-2 outline-none border-l border-gray-400'
            {...register("password", { required: true })}
          />
        </div>
          {errors.password && <p className='text-red-500 block'>This field is required</p>}
        <input
          type='submit'
          value='Login'
          className='w-full my-5 bg-blue-500 text-white p-2 rounded-md'
        />
      </form>
    </div>
  );
}

export default Login;
