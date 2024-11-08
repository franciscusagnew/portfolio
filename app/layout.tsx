import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Poppins, Bebas_Neue } from 'next/font/google'
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const poppins = Poppins({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-bebas',
})

export const metadata: Metadata = {
  title: "Portfolio of Franciscus Agnew",
  description: "Portfolio of Franciscus Agnew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${poppins.variable} font-poppins antialiased`}>
            {children}
        </body>
    </html>
  );
}
