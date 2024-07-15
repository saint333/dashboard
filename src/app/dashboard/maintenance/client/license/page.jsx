import { auth } from "@/app/auth";
import License from "@/components/maintenance/client/license";
import { Card, CardContent } from "@mui/material";

const Data = async () => {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/maintenance/client/license",
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

export default async function Licenses() {
  const product = await Data();
  console.log(product)

  return (
    <Card>
      <CardContent>
        <License product={product}/>
      </CardContent>
    </Card>
  )
}
