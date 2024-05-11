import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { MenuProvider } from "@/context/menu/MenuContext";

function DashboardLayout({ children }) {
  
  return (
    <div className="flex h-full">
      <MenuProvider>
        <Navbar />
        <div className="flex-auto overflow-y-auto">
          <Header />
          <div className="p-5 bg-[#f0f0f5] text-[#282f53]">
            {children}
          </div>
        </div>
      </MenuProvider>
    </div>
  );
}

export default DashboardLayout;
