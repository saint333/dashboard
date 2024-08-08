"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Header from "../header";
import Main from "../main";
import Loading from "@/app/loading";

export default function Dasboard({ children, session }) {
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCargando(true);
    }, 1500);
  }, []);

  return cargando ? (
    <>
      <Navbar />
      <div className='flex-auto overflow-y-auto'>
        <Header session={session} />
        <Main>{children}</Main>
      </div>
    </>
  ) : (
    <Loading />
  );
}
