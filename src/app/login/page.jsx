import {
  Card,
  CardContent,
  CardHeader
} from "@mui/material";
import LoginForm from "@/components/loginform/LoginForm";

function Login() {
  return (
    <Card>
      <CardContent>
        <CardHeader title='Login' className='text-center' />
        <CardContent>
          <LoginForm />
        </CardContent>
      </CardContent>
    </Card>
  );
}

export default Login;
