import "@/styles/globals.css";
import "@/styles/style.css";

import { type Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ThemeProvider } from "@/components/common/theme-provider";

export const metadata: Metadata = {
  title: "Blog",
  description: "Modern Blog",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"], // Vazirmatn supports Farsi via the arabic subset
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All weights as per Google Fonts
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geist.variable} ${vazirmatn.variable} font-vazirmatn`}
    >
      <body className="h-full min-h-dvh w-screen overflow-x-hidden pt-[74px]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
