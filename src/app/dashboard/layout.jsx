import Header from "@/components/header";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import { MenuProvider } from "@/context/menu/MenuContext";

function DashboardLayout({ children }) {
  return (
    <div className='flex h-full'>
      <MenuProvider>
        <Navbar />
        <div className='flex-auto overflow-y-auto'>
          <Header />
          <Main>{children}</Main>
        </div>
      </MenuProvider>
    </div>
  );
}

export default DashboardLayout;
