import ProductsList from "@/components/maintenance/products";
import { Card, CardContent } from "@mui/material";

export default function Product() {
  return (
    <Card>
      <CardContent>
        <ProductsList/>
      </CardContent>
    </Card>
  );
}
