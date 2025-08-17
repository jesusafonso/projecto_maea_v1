import "./globals.css";
import type { Metadata } from "next";
import { Layout } from "@/components";
import WhatsAppButton from "@/components/whatsapp-button";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "MAEA",
  description:
    "MAEA - Professional consulting and ISO certification services. Expert solutions for quality management, environmental management, and business excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <LanguageProvider>
          <Layout>
            {children}
            <WhatsAppButton />
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
