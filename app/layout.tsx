import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz Real Analysis - Prof. IBNJAA Said",
  description: "Interactive quiz platform for Real Analysis: Sequences, Series, Continuity, and Differentiability",
  openGraph: {
    title: "Quiz Real Analysis",
    description: "Master Real Analysis Concepts - Prof. IBNJAA Said",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
