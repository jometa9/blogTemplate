import "./globals.css";
import type { Metadata } from "next";
import 'highlight.js/styles/github.css';

export const metadata: Metadata = {
  title: "blogTemplate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
