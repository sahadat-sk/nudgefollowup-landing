import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://www.nudgefollowup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NudgeFollowup — Follow-up tracking for small businesses, without the spreadsheet",
    template: "%s — NudgeFollowup",
  },
  description:
    "NudgeFollowup replaces your follow-up spreadsheet with a simple tracker that tells you who to contact, when, and what happened last time. Built for small businesses, freelancers, and sales teams who are done losing leads in row 47.",
  keywords: [
    "follow up tracker",
    "follow-up software for small business",
    "CRM alternative to spreadsheet",
    "lead tracking tool",
    "sales follow up reminder app",
    "excel alternative for CRM",
    "customer follow up management",
  ],
  authors: [{ name: "NudgeFollowup" }],
  openGraph: {
    title: "NudgeFollowup — Follow-up tracking for small businesses, without the spreadsheet",
    description:
      "The simple follow-up tracker for small businesses. Know exactly who to nudge, and when, without another spreadsheet tab.",
    url: siteUrl,
    siteName: "NudgeFollowup",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NudgeFollowup — Follow-up tracking without the spreadsheet",
    description:
      "Know exactly who to follow up with, and when. Built for small businesses who outgrew Excel.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NudgeFollowup",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "NudgeFollowup is a follow-up tracker built for small businesses to replace spreadsheets — track contacts, next follow-up dates, statuses, and communication history in one place.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: siteUrl,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from a follow-up spreadsheet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A spreadsheet doesn't remind you of anything — you have to remember to check it. NudgeFollowup surfaces who's overdue, due today, and due this week automatically, and keeps a timeline of every call, note, and email against each contact.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be technical to set it up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. If you can fill in a spreadsheet row, you can add a contact in NudgeFollowup. Most people are fully switched over in under ten minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bring over my existing contacts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can add them directly today — it takes a couple of minutes to copy over an active list. Spreadsheet import is on the roadmap for anyone with a larger contact base.",
      },
    },
    {
      "@type": "Question",
      name: "Is NudgeFollowup a full CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's deliberately smaller than a CRM. There's no pipeline forecasting or sales automation — just a fast way to track who you owe a follow-up to, so nothing falls through.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
