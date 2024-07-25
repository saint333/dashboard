"use serve";
import { auth } from "@/app/auth";

export const SupplierList = async () => {
  const session = await auth();
  console.log("🚀 ~ SupplierList ~ session:", session)
  const response = await fetch(process.env.URL_API + "/maintenance/provider", {
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
