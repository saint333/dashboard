import {
  Card,
  CardContent,
  CardHeader
} from "@mui/material";
import LoginForm from "@/components/loginform/LoginForm";
import { CustomCard } from "@/ui/Card";

function Login() {
  return (
    // <Card>
    //   <CardContent>
    //     <CardHeader title='Login' className='text-center' />
    //     <CardContent>
    //       <LoginForm />
    //     </CardContent>
    //   </CardContent>
    // </Card>
    <CustomCard title={"Login"} classNameHeader="text-center">
      <LoginForm />
    </CustomCard>
  );
}

export default Login;
