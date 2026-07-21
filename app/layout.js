import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Next.js da dars ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        <nav className="bg-amber-600 flex justify-center gap-4">
          <Link href="/">Bosh sahifa</Link> | {""}
          <Link href="/about">Biz haqimizda</Link> | {""}
          <Link href="/contact">Contact</Link> | {""}
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
} 


