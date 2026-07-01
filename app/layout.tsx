import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lisa Quama | Dancer & Choreographer",
  description:
    "A motion-heavy portfolio concept for Lisa Quama, dancer and choreographer."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
