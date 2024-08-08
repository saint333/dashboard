import ClientList from "@/components/maintenance/client";
import { Card, CardContent } from "@mui/material";

export default function List() {
  return (
    <Card>
      <CardContent>
        <ClientList />
      </CardContent>
    </Card>
  )
}
