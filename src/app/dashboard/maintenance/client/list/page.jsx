import { auth } from "@/app/auth";
import ClientList from "@/components/maintenance/client";
import { Card, CardContent } from "@mui/material";

const Data = async () => {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/maintenance/client",
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

export default async function List() {
  const product = await Data();
  console.log(product)

  return (
    <Card>
      <CardContent>
        <ClientList product={product}/>
      </CardContent>
    </Card>
  )
}
