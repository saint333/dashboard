"use serve";
import { auth } from "@/app/auth";

export const ProductServices = async ({ data, accion, letterAccion }) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/maintenance/product",
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      body: JSON.stringify({
        p_inidproducto: 3068,
        p_iniddominio: 1,
        chcodigoproducto: "",
        chcodigoproductoantes: "",
        p_inidfamilia: 0,
        p_inidtipo: 0,
        p_inidmarca: 0,
        p_inidmodelo: 0,
        p_inidcalibre: 0,
        p_inidacabado: 0,
        p_inidcapacidad: 0,
        p_inidunidadmedida: 0,
        nucantporuni: 0,
        chdescripcion: "PRUEBA ",
        nustockminima: 0,
        nuprecio: 5,
        nuprecio2: 5,
        nuprecio3: 5,
        nuprecio4: 5,
        p_inidsituacion: true,
        req_serie: true,
        paginaweb: true,
        destacado: true,
        churl: "",
        accion: "U",
      }),
    }
  );
  return response;
};

export const fetchDataProduct = async (padre, hijo) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/maintenance/family?padre=${padre}&hijo=${hijo}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  return response.json();
};

export const NewFamily = async (data, letterAccion) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/maintenance/family`,
    {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      body: JSON.stringify({
        p_inidfamiliadetalle: letterAccion == "I" ? 0: data.p_inidfamiliadetalle,
        p_inidfamiliacabecera: letterAccion == "D" ? 0 : data.p_inidfamiliacabecera,
        p_inidfamiliacabecera2: letterAccion == "D" ? 0 : data.p_inidfamiliacabecera2,
        chfamiliadetalle: data.chfamiliadetalle,
        p_iniddominio: session.user.p_iniddominio_default,
        accion: letterAccion,
      }),
    }
  );
  return response.json();
};

export const productList = async () => {
  const session = await auth();
  const responde = await fetch(process.env.NEXT_PUBLIC_API_URL + "/maintenance/product",
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