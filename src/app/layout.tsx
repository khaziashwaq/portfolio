import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashwaq Khazi — Engineer",
  description:
    "Full-stack engineer focused on scalable products, AI systems, and software that solves real-world problems.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="h-full bg-background text-foreground font-sans overflow-hidden">
        {children}
      </body>
    </html>
  );
}
