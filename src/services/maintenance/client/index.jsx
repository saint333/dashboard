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

export const CardServices = async ({ data, accion, letterAccion }) => {
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
        p_inidtarjeta: null,
        p_inidcliente: 1,
        chtarjeta: "ABC123",
        p_inidmodalidad: 789,
        modalidad: "DEFENSA PERSONAL-L1",
        chtipo: "Tipo1",
        chmodelo: "ModeloX",
        chmarca: "MarcaY",
        chcalibre: "CalibreZ",
        chserie: "Serie1234",
        accion: "I",
      }),
    }
  );
  return response.json();
};

export const LicenseServices = async ({ data, accion, letterAccion }) => {
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
        p_inidlicencia: null,
        p_inidcliente: 1,
        chlicencia: "LICDDD8",
        bodefenzapersonal: true,
        bocaza: false,
        bodeporte: true,
        boseguridaprivada: false,
        bosispe: true,
        chfechavencimiento: "11/07/2024",
        accion: "I",
      }),
    }
  );
  return response.json();
};

export const ResolucionServices = async ({ data, accion, letterAccion }) => {
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
        p_inidresolucion: null,
        p_inidcliente: 1,
        chresolucion: "RES123",
        chfechavencimiento: "11/07/2024",
        accion: "I",
      }),
    }
  );
  return response.json();
};
