import { AuthProvider } from "@/context/auth/AuthContext";
import "./globals.css";
import { GlobalProvider } from "@/context/global/GlobalContext";

export const metadata = {
  title: "Lina ERP | Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </head>
      <GlobalProvider>
        <div className='h-screen w-full'>
          <AuthProvider>{children}</AuthProvider>
        </div>
      </GlobalProvider>
    </html>
  );
}
