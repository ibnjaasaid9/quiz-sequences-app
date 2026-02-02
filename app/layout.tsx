import type { Metadata } from "next";
import "./globals.css";
import QuizForm from "@/components/QuizForm";

export const metadata: Metadata = {
  title: "Mentoring Math - Quiz Correction Tool",
  description: "Fast and accurate math sequences quiz correction tool with instant feedback",
  openGraph: {
    title: "Mentoring Math Quiz Correction",
    description: "Interactive quiz tool for sequences - Prof. Said Ibn Jaa",
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
        <QuizForm />
      </body>
    </html>
  );
}
