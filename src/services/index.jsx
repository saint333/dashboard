"use serve";
import { auth } from "@/app/auth";

export const commonServices = async ({ letterAccion }) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/maintenance/master/detail?master=" +
      letterAccion,
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
};

export const DataHeader = async (session) => {
  const responde = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/auth/domain",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  const lists = await responde.json();
  return { p_iniddominio_default: session.user.p_iniddominio_default, lists };
};

export const SucursalData = async (session) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/auth/branch",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  return response.json();
}

