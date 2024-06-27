import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/header";

export const metadata: Metadata = {
  title: "kchat.dev",
  description: "A webfolio built in Next.js v14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
