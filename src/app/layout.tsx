import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Work_Sans, Inknut_Antiqua, Josefin_Slab, Inter, Josefin_Sans } from "next/font/google";
import Script from "next/script";
import { GA_TRACKING_ID } from "./utils/analytics";
import { Analytics } from "./components/analytics";
import { Suspense } from "react";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: "resizes-content",
};

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
        url: "https://www.waye.dev/images/webclip.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@waye_dev",
    images: ["https://www.waye.dev/images/webclip.jpg"],
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
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `}
            </Script>
          </>
        )}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
