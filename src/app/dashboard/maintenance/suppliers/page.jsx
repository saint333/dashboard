import Supplier from "@/components/maintenance/suppliers";
import { SupplierList } from "@/services/maintenance/suppliers";
import { Card, CardContent } from "@mui/material";
import { Suspense } from "react";
import Loading from "../../loading";

export default async function Suppliers() {
  const product = await SupplierList();

  return (
    <Suspense fallback={<Loading />}>
      <Card>
        <CardContent>
          <Supplier product={product} />
        </CardContent>
      </Card>
    </Suspense>
  );
}
