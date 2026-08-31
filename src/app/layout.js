import { Fraunces, Sora } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.reclaimingrespect.org"),
  title: "Reclaiming Respect | Emanuel C. Perlman",
  description:
    "A Blueprint for Peace in a Divided World. Discover Reclaiming Respect by Emanuel C. Perlman — and the forthcoming memoir Reclaiming the Spirit (October 2026).",
  keywords: [
    "peace",
    "conflict resolution",
    "Reclaiming Respect",
    "Reclaiming the Spirit",
    "Emanuel C. Perlman",
    "Destination Peace",
  ],
  authors: [{ name: "Emanuel C. Perlman" }],
  openGraph: {
    title: "Reclaiming Respect | Emanuel C. Perlman",
    description:
      "A Blueprint for Peace in a Divided World — and the forthcoming memoir Reclaiming the Spirit, October 2026.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Destination Peace",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Reclaiming Respect | Emanuel C. Perlman",
    description:
      "A Blueprint for Peace in a Divided World — and the forthcoming memoir Reclaiming the Spirit, October 2026.",
    images: ["/images/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sora.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
