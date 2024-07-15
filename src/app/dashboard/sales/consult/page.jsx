import { auth } from "@/app/auth";
import ConsultTable from "@/components/sales/consult";
import { Card, CardContent } from "@mui/material";

const Data = async () => {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/maintenance/client/card",
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

export default async function Consult() {
  const product = await Data();
  console.log(product)

  return (
    <Card>
      <CardContent>
        {/* <ConsultTable product={[]}/> */}
      </CardContent>
    </Card>
  )
}
