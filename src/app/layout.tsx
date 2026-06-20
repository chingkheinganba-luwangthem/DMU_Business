import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DMU Journal — Dhanamanjuri University Academic Journal Portal",
  description:
    "Official academic journal portal of Dhanamanjuri University, Manipur. Peer-reviewed research publications in Management, Business, Ethics, and Social Sciences.",
  keywords: [
    "DMU Journal",
    "Dhanamanjuri University",
    "academic journal",
    "research",
    "Manipur",
    "peer-reviewed",
  ],
};

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="main-content">
          <div className="content-area">
            {children}
          </div>
          <Sidebar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
