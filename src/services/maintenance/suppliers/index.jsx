"use serve";
import { auth } from "@/app/auth";

export const SupplierList = async () => {
  const session = await auth();
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/maintenance/provider", {
    method: "GET",
    headers: {
      Authorization: `JWT ${session.user.token_acceso}`,
    },
    next: {
      tags: ["supplier"],
    },
  });
  return response.json();
};

export const SupplierServices = async ({ data, letterAccion }) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/maintenance/provider",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      body: JSON.stringify({
        ...data,
        p_iniddominio: session.user.p_iniddominio_default,
        accion: letterAccion,
      }),
    }
  );
  return response.json();
};

export const DetailSupplierServices = async ({client, legal}) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `/maintenance/provider/detail?p_inidproveedor=${client}&p_inidjurinat=${legal}`,
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
