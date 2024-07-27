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

export const NewFamily = async (data) => {
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
        p_inidfamiliadetalle: 0,
        p_iniddominio: 1,
        p_inidfamiliacabecera: 5,
        p_inidfamiliacabecera2: 0,
        chfamiliadetalle: "CALIBRE 88",
        accion: "I",
      }),
    }
  );
  return response.json();
};
