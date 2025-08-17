import type { Metadata } from "next";
import { roboto } from "../../public/fonts";
import "@/app/styles/reset.css";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "CinemaGuide",
  description: "Home page CinemaGuide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-[24px] antialiased`}>
        {children}
      </body>
    </html>
  );
}
