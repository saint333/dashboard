import Dasboard from "@/components/layouts/dasboard";
import { MenuProvider } from "@/context/menu/MenuContext";
import { auth } from "../auth";

async function DashboardLayout({ children }) {
  const session = await auth()
  return (
    <div className='flex h-full'>
      <MenuProvider>
        <Dasboard session={session}>{children}</Dasboard>
      </MenuProvider>
    </div>
  );
}

export default DashboardLayout;
