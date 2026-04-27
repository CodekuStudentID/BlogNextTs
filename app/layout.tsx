import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Navbar akan selalu ada di paling atas */}
        <Navbar /> 

        {/* Semua isi dari page.tsx akan masuk ke {children} */}
        <main>{children}</main>

        {/* Footer akan selalu ada di paling bawah */}
        <Footer />
      </body>
    </html>
  );
}