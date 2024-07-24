"use serve";
import { auth } from "@/app/auth";

export const ClientServices = async ({ data, letterAccion }) => {
  const session = await auth();
  console.log("🚀 ~ ClientServices ~ session:", session)
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/maintenance/client",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      body: JSON.stringify({
        p_iniddominio: session.user.p_iniddominio_default,
        accion: letterAccion,
        ...data
      }),
    }
  );
  const dataEnd = await response.json();
  console.log("🚀 ~ ClientServices ~ dataEnd:", dataEnd)
  return dataEnd;
};

export const CardServices = async ({ data, letterAccion }) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/maintenance/client/card",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      body: JSON.stringify({
        ...data,
        accion: letterAccion,
      }),
    }
  );
  return response.json();
};

export const LicenseServices = async ({ data, letterAccion }) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/maintenance/client/license",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      body: JSON.stringify({
        ...data,
        accion: letterAccion,
      }),
    }
  );
  return response.json();
};

export const ResolucionServices = async ({ data, letterAccion }) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/maintenance/client/resolution",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      body: JSON.stringify({
        ...data,
        accion: letterAccion,
      }),
    }
  );
  return response.json();
};
