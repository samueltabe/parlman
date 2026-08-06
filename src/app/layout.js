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
  },
  icons: {
    icon: "/images/favicon.ico",
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
