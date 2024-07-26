"use serve";
import { auth } from "@/app/auth";

export const commonServices = async ({ letterAccion }) => {
  const session = await auth();
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/maintenance/master/detail?master=" + letterAccion,
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