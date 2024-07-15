import { auth } from "@/app/auth";
import ResolutionCard from "@/components/maintenance/client/resolution";
import { Card, CardContent } from "@mui/material";

const Data = async () => {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/maintenance/client/resolution",
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

export default async function Resolution() {
  const product = await Data();
  console.log(product)

  return (
    <Card>
      <CardContent>
        <ResolutionCard product={product}/>
      </CardContent>
    </Card>
  )
}
