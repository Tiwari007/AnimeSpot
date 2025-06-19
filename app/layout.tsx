import type { Metadata } from "next";
import { Risque } from "next/font/google";
import './globals.css';
import "../styles/_feature_all.scss";
import Navbar from "../components/navbar";
import { ReduxProvider } from "../components/ReduxProvider";

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
        <ReduxProvider>
          <Navbar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
