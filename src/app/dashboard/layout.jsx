import Header from "@/components/header";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { MenuProvider } from "@/context/menu/MenuContext";

import { auth } from "@/app/auth";
const Data = async () => {
  const session = await auth();
  const responde = await fetch(process.env.URL_API + "/auth/domain",
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `JWT ${session.user.token_acceso}`,
      },
    }
  );
  const lists = await responde.json();
  return {p_iniddominio_default: session.user.p_iniddominio_default ,lists}
};

async function DashboardLayout({ children }) {
  const list = await Data();

  return (
    <div className='flex h-full'>
      <MenuProvider>
        <Navbar />
        <div className='flex-auto overflow-y-auto'>
          <Header domain={list}/>
          <Main>{children}</Main>
        </div>
      </MenuProvider>
    </div>
  );
}

export default DashboardLayout;
