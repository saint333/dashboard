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

export const DetailClientServices = async ({client, legal}) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/maintenance/client/detail?p_inidcliente=${client}&p_inidjurinat=${legal}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  return response.json();
}

export const CardList = async () => {
  const session = await auth();
  const responde = await fetch(process.env.NEXT_PUBLIC_API_URL + "/maintenance/client/card",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  const lists = await responde.json();
  return lists
};

export const List = async () => {
  const session = await auth();
  const responde = await fetch(process.env.NEXT_PUBLIC_API_URL + "/maintenance/client",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  const lists = await responde.json();
  return lists
};

export const LicenseList = async () => {
  const session = await auth();
  const responde = await fetch(process.env.NEXT_PUBLIC_API_URL + "/maintenance/client/license",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  const lists = await responde.json();
  return lists
};

export const ResolutionList = async () => {
  const session = await auth();
  const responde = await fetch(process.env.NEXT_PUBLIC_API_URL + "/maintenance/client/resolution",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  const lists = await responde.json();
  return lists
};