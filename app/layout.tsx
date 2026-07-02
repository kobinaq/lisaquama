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
      <body>
        <div className="mobileConstruction" role="status" aria-live="polite">
          <p>Mobile site under construction</p>
          <h1>View this experience on desktop.</h1>
          <span>
            The Lisa Quama site is being tuned for phones. Please open it on a
            laptop or desktop for now.
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}
