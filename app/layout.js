import Header from "@/components/Header";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Joy's Luxury - Elegant Clothing & Bags",
  description: "Elegant clothing and bags by Joy's Luxury. Discover our collection of stylish dresses, handbags, and accessories designed for every occasion.",
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
