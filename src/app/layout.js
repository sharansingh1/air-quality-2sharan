import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Session from "@/components/Session";
import Footer from "@/components/Footer";

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Omega Initiative",
  description: "Generated by create next app",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
      />
      <body className={inter.className}>
        <Session session={session}>{children}</Session>
        <Footer />
      </body>
    </html>
  );
}
