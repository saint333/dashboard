import { auth } from "@/app/auth";
import ExhibitionTable from "@/components/management/exhibition";
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

export default async function Exhibition() {
  const product = await Data();

  return (
    <Card>
      <CardContent>
        <ExhibitionTable product={[]}/>
      </CardContent>
    </Card>
  )
}
