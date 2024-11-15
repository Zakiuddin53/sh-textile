import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SH TEXTILE - Tailoring Management",
  description: "Tailoring management system for SH TEXTILE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`} style={{ backgroundColor: "#f3f4f6" }}>
        <MantineProvider
          forceColorScheme="light"
          defaultColorScheme="light"
          theme={{
            primaryColor: "blue",
            fontFamily: "var(--font-geist-sans)",
            headings: { fontFamily: "var(--font-geist-sans)" },
          }}
        >
          <Notifications />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
