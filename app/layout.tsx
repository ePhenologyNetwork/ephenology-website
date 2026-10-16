import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { ScrollNavigation } from "./scroll-navigation";

export const metadata: Metadata = {
  title: "e-Phenology Network",
  description:
    "An international research network monitoring tropical vegetation phenology.",
  icons: {
    icon: "/brand/ephenology-symbol.png",
    apple: "/brand/ephenology-symbol.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><ScrollNavigation />{children}</body>
    </html>
  );
}
