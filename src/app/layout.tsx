import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agupta-portfolio.vercel.app"),
  title: {
    default: "Aditya Gupta | AI & GTM for B2B",
    template: "%s | Aditya Gupta",
  },
  description: "Marketing + AI: I turn messy info into usable products and go-to-market stories for B2B and industrial companies.",
  keywords: ["Aditya Gupta", "Product Marketing", "AI", "B2B Marketing", "Go-To-Market", "Industrial Tech", "Portfolio"],
  authors: [{ name: "Aditya Gupta" }],
  creator: "Aditya Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agupta-portfolio.vercel.app",
    title: "Aditya Gupta | AI & GTM for B2B",
    description: "Marketing + AI: I turn messy info into usable products and go-to-market stories for B2B and industrial companies.",
    siteName: "Aditya Gupta Portfolio",
    images: [
      {
        url: "/og-image.png", // A placeholder, fallback to standard if not present
        width: 1200,
        height: 630,
        alt: "Aditya Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Gupta | AI & GTM for B2B",
    description: "Marketing + AI: I turn messy info into usable products and go-to-market stories for B2B and industrial companies.",
    creator: "@adityagupta", // Optional if the user has twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google88b5814f5c78bf8f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QEBT3S10JS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QEBT3S10JS');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
