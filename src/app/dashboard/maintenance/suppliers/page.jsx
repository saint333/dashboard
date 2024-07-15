import { auth } from "@/app/auth";
import Supplier from "@/components/maintenance/suppliers";
import { Card, CardContent } from "@mui/material";

const Data = async () => {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/maintenance/provider",
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

export default async function Suppliers() {
  const product = await Data();
  console.log(product)

  return (
    <Card>
      <CardContent>
        <Supplier product={product}/>
      </CardContent>
    </Card>
  )
}
