import Header from "@/components/Header";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Diamond Apparell",
  description: "Elegant clothing and bags by Diamond Apparell",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header />
        <main>{children}</main>

        
        <footer className="footer">
          <p>© {new Date().getFullYear()} Joy's Luxury. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
