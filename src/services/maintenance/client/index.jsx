"use serve";

export const ClientServices = async ({ data, accion, letterAccion }) => {
  const session = await auth();
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
        p_inidcliente: 0,
        p_iniddominio: 1,
        p_inidtipocliente: 42,
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
        chfechanacimiento: "01/07/2024",
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
