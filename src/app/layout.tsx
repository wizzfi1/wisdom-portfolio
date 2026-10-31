import type { Metadata } from "next";
import "./globals.css";
const title = "Wisdom Shaibu | Applied AI & Backend Engineer";
const description =
  "Applied AI and backend engineering across software testing, financial automation and accessible learning. Explore projects, engineering decisions and the systems behind the work.";
export const metadata: Metadata = {
  metadataBase: new URL("https://wisdom-portfolio-rho.vercel.app"),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Wisdom Shaibu" }],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Wisdom Shaibu",
    locale: "en_NG",
  },
  twitter: { card: "summary_large_image", title, description },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
