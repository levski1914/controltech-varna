import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "ControlTech Varna | Компютърен сервиз във Варна",
  description:
    "Компютърен сервиз във Варна – диагностика, Windows инсталация, профилактика, SSD upgrade, хардуерни ремонти и ясни цени.",
  keywords: [
    "компютърен сервиз Варна",
    "ремонт на лаптопи Варна",
    "инсталация на Windows Варна",
    "профилактика лаптоп Варна",
    "SSD upgrade Варна",
  ],
  verification: {
    google: "pc-USx5RpkDZ1Esm91fiynBX75ANQZPre4pwsItPGHg",
  },

  openGraph: {
    title: "ControlTech Varna | Компютърен сервиз във Варна",
    description:
      "Диагностика, профилактика, Windows, SSD upgrade и сервизни услуги за лаптопи и компютри във Варна.",
    url: "https://controltech-varna.netlify.app/",
    siteName: "ControlTech Varna",
    locale: "bg_BG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
