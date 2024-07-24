import { auth } from "@/app/auth";
import Supplier from "@/components/maintenance/suppliers";
import { Card, CardContent } from "@mui/material";

// const Data = async () => {
//   const session = await auth();
//   const responde = await fetch(process.env.URL_API + "/maintenance/provider",
//     {
//       method: "GET",
//       headers: {
//         Authorization: `JWT ${session.user.token_acceso}`,
//       },
//       next: {
//         tags: ["supplier"]
//       }
//     }
//   );
//   const lists = await responde.json();
//   return lists
// };

export default async function Suppliers() {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/maintenance/provider",
    {
      method: "GET",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
      next: {
        tags: ["supplier"]
      }
    }
  );
  const product = await responde.json();
  // const product = await Data();
  console.log(product)

  return (
    <Card>
      <CardContent>
        <Supplier product={product}/>
      </CardContent>
    </Card>
  )
}
