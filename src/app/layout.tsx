import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
  title: "Jigme Phuntsho Wangyel",
  description: "Personal Portfolio of Jigme Phuntsho Wangyel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased     <div className="m-0 p-0">
      `}
      >
        {children}
      </body>
    </html>
  );
}
