"use serve";
import { auth } from "@/app/auth";

export const SupplierServices = async ({ data, accion, letterAccion }) => {
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
        p_inidproveedor: 0,
        p_iniddominio: 1,
        chdireccion: "Calle Ejemplo 123",
        chtelefono: "999999999",
        chcorreo: "ejemplo@correo.com",
        p_inidpais: 1,
        p_inidjurinat: 1,
        p_inidpersona: 0,
        p_inidtipodocumento: 57,
        chnrodocumento: "12345679",
        chapellidopaterno: "SANCHEZ",
        chapellidomaterno: "PRUEBA",
        chnombres: "MASSS",
        chfechanacimiento: "20240702",
        p_inidtiposexo: 1,
        p_inidempresa: null,
        chrazonsocial: null,
        chnombrecomercial: null,
        chruc: null,
        p_inidubigeo: 1,
        accion: "I",
        proceso: "PERSONA",
      }),
    }
  );
  return response.json();
};
