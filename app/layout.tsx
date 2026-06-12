import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harga Emas Modern - Real Time",
  description: "Pantau harga emas Antam, Pegadaian, Spot Dunia dengan UI Glassmorphism",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark">
      <body className="min-h-screen text-white">{children}</body>
    </html>
  );
}