import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Providers } from "./components/providers";
import { Toaster } from "react-hot-toast";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "CryptoSynergy",
  description:
    "Explore Endless Opportunities: Seamless Token Swaps and Strategic Portfolio Diversification",
  openGraph: {
    title: "CryptoSynergy",
    url: process.env.URL,
    description:
      "Open the Door to Limitless Potential: Effortless Token Swaps and Expertly Curated Portfolios",
    images: [
      {
        url: "",
        secureUrl: "",
        alt: "CryptoSynergy",
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  alternates: {
    canonical: process.env.URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoSynergy",
    description:
      "Navigating the Future of Finance: Streamline Your Token Swaps and Diversify Your Investments",
    creator: "",
    images: [""],
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className + " hero-background"}>
        <Providers>
          <Toaster position="bottom-center" reverseOrder={false} /> <Navbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
