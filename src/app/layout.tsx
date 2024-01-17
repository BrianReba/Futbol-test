import type {Metadata} from "next";

import "./globals.css";
import Link from "next/link";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Futbolitos",
  description: "Futbol Reina Mora",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <header className="flex items-center justify-between">
          <Link className="text-xl font-bold leading-[4rem]" href="/">
            Futbolitos
          </Link>
          <nav>
            <ul className="flex gap-4 opacity-70">
              <li>
                <Link href="/">Partidos</Link>
              </li>
              <li>
                <Link href="/players">Jugadores</Link>
              </li>
              <li>
                <Link href="/builder">Armador de equipos</Link>
              </li>
              <li>
                <Link href="/auth/register">Register</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="py-8">
          {children}
        </main>
        <Toaster expand={true} richColors />
        <footer className="text-center leading-[4rem] opacity-70">
          © {new Date().getFullYear()} Reba 😎
        </footer>
      </body>
    </html>
  );
}