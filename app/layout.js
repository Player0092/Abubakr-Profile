import "./globals.css";
import Nav from "@/components/Nav";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata = {
  title: "Name — Mathematical Explorations",
  description: "Interactive Desmos explorations in interpolation, regression, and approximation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <div className="bg-field" />
        <div className="bg-glow" />
        <Nav />
        {children}
      </body>
    </html>
  );
}

