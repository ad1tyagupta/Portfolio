import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

