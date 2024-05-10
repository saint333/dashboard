"use client"
import { useAuthProvider } from '@/context/auth/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Loading from './loading';

export default function Home() {
  const [{user}] = useAuthProvider();
  console.log("🚀 ~ Home ~ user:", user)
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }else{
      router.push("/dashboard");
    }
  },[router, user])
  return (
    <Loading />
  )
}
