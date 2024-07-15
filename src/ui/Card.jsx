import { Card, CardContent, CardHeader } from "@mui/material";

export function CustomCard({ children, title, classNameHeader }) {
  return (
    <Card>
      <CardContent>
        {title && <CardHeader title={title} className={classNameHeader} />}
        {children}
      </CardContent>
    </Card>
  );
}
