import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Work_Sans, Inknut_Antiqua, Josefin_Slab, Inter, Josefin_Sans } from "next/font/google";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const inknutAntiqua = Inknut_Antiqua({
  variable: "--font-inknut-antiqua",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const josefinSlab = Josefin_Slab({
  variable: "--font-josefin-slab",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Waye",
  description:
    "A website to discover tools, programs, and support systems designed to help open-source developers thrive. Waye empowers builders to stay clear-headed, motivated, and aligned for long-term impact.",
  keywords:
    "open source, open source development, developer tools, programming resources, software development, tech community, collaboration tools, coding resources, developer support, programming education, tech initiatives, community-driven projects, resilience in tech, decentralized technology, innovation in open source",
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    title: "Waye",
    description:
      "A website to discover tools, programs, and support systems designed to help open-source developers thrive. Waye empowers builders to stay clear-headed, motivated, and aligned for long-term impact.",
    url: "https://www.waye.dev",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.waye.dev/images/webclip.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@waye_dev",
    images: ["https://www.waye.dev/images/webclip.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${workSans.variable} ${inknutAntiqua.variable} ${josefinSlab.variable} ${josefinSans.variable} ${inter.variable} bg-blue-custom-100 font-workSans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
