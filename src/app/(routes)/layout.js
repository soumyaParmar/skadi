import { Inter } from "next/font/google";
import { Nerko_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const nerkoOne = Nerko_One({
  weight: '400',
  subsets :['latin']
})

export const metadata = {
  title: "Skadi | Homestay",
  description: "Feel like home, live like home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nerkoOne.className}>{children}</body>
    </html>
  );
}
