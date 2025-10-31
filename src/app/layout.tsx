import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar/components/sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Road Next",
  description: "My Road to Next application...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <div className="flex h-screen overflow-hidden border-collapse">
            <Sidebar />
            <main
              className="
                min-h-screen flex-1
                overflow-y-auto overflow-x-hidden
                py-24 px-8
                bg-secondary/20
                flex flex-col
              "
            >
              {children}
            </main>
          </div>
          <Toaster expand />
        </ThemeProvider>
      </body>
    </html>
  );
}
