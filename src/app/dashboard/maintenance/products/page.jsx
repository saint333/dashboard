import { auth } from "@/app/auth";
import ProductsList from "@/components/maintenance/products";
import { Card, CardContent } from "@mui/material";

const Data = async () => {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/maintenance/product",
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

export default async function Product() {
  const product = await Data();
  return (
    <Card>
      <CardContent>
        <ProductsList product={product}/>
      </CardContent>
    </Card>
  );
}