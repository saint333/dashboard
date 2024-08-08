import LoginForm from "@/components/loginform/LoginForm";
import { CustomCard } from "@/ui/Card";

function Login() {
  return (
    <CustomCard title={"Login"} classNameHeader='text-center'>
      <LoginForm />
    </CustomCard>
  );
}

export default Login;
