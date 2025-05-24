import type { Metadata } from "next";
import { Risque } from "next/font/google";
import './globals.css';
import "../styles/_feature_all.scss";
import Navbar from "../components/navbar";

const risque = Risque({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-risque',
});

export const metadata: Metadata = {
  title: "AnimeForYouMee",
  description: "Discover the world of anime with us!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${risque.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
