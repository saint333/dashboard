import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { MenuProvider } from "@/context/menu/MenuContext";

function DashboardLayout({ children }) {
  
  return (
    <div className="flex h-full">
      <MenuProvider>
        <Navbar />
        <div className="flex-auto">
          <Header />
          {children}
        </div>
      </MenuProvider>
    </div>
  );
}

export default DashboardLayout;
