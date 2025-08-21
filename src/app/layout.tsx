import "@/styles/globals.css";
import "@/styles/style.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Modern Blog",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={`${geist.variable}`}>
      <body className="h-full min-h-dvh w-screen overflow-x-hidden pt-[74px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
