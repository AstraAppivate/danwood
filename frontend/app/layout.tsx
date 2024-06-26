import type { Metadata } from "next";
import { Header } from '../components/Header';
import "./globals.css";

export const metadata: Metadata = {
  title: "Warfighter - Noughts and Crosses",
  description: "classic game of noughts and crosses"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     
    <html lang="en">
          <body className="bg-slate-200">
            <Header />
            {children}
          </body>
    </html>
  );
}
