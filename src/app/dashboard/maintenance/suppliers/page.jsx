import Supplier from "@/components/maintenance/suppliers";
import { SupplierList, SupplierServices } from "@/services/maintenance/suppliers";
import { Card, CardContent } from "@mui/material";
import { Suspense } from "react";
import Loading from "../../loading";

export const prueba = async (data, accion) => {
  const response = await SupplierServices({ data, letterAccion: accion });
  const list = await SupplierList();
  return list
}
 
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
