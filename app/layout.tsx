/* eslint-disable @next/next/next-script-for-ga */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academics-Pro | Best School Management System",
  description: "Academics-Pro is the ultimate school management system, offering seamless student, teacher, and administration workflows with cutting-edge technology.",
  keywords:[
    "Academics-Pro",
    "Acedemics-Pro",
    "AcademicsPro",
    
    "school management system",
    "student portal",
    "education software",
    "academic management",
    "online school system",
    "school ERP",
    "attendance tracking",
    "school administration software",
    "best school management software",
    "AI-powered education software",
    "cloud-based school ERP",
    "online student management system",
    "digital classroom management",
    "school attendance management system",
    "parent-teacher communication platform",
    "learning management system (LMS)",
    "school fee management software",
    "academic performance tracking software",
    "school timetable management system",
    "library management software for schools",
    "hostel management system for students",
    "transport management system for schools",
    "automated school administration system",
    "top school ERP solutions",
    "mobile-friendly school management app",
    "school grade management software",
    "teacher management system",
    "student enrollment software",
    "fee payment system for schools",
    "online assignment submission system",
    "student report card software",
    "school scheduling software",
    "school event management system",
    "smart school software",
    "school communication platform",
    "school data management system",
    "student performance monitoring software",
    "AI-based learning management system",
    "student attendance software",
    "school management app",
    "school system for private schools",
    "customizable school management software",
    "school software with payment gateway",
    "cloud school ERP software",
    "integrated school management system",
    "school app with parent access",
    "smart education management software",
    "online learning management system",
    "school ERP software with student portal",
    "parent portal for school management",
    "school software with gradebook feature",
    "academic performance tracking tools",
    "mobile app for school management",
    "school communication app for parents",
    "school homework management system",
    "school attendance and grade tracking system",
    "school transportation software",
    "AI-driven school management system",
    "school management platform with reports",
    "cloud-based academic management system",
    "student information management software",
    "school digital gradebook system",
    "school event calendar software",
    "student exam management software",
    "virtual classroom management software",
    "student portal for grades and attendance",
    "parent-teacher conference scheduling software",
    "AI-assisted academic management",
    "student feedback management system",
    "school library management system",
    "online fee collection system for schools",
    "school schedule generator software",
    "online class management software",
    "online school administration platform",
    "online student database system",
    "school management platform with reporting",
    "school mobile app with attendance tracking",
    "fee tracking software for schools",
    "online assignment tracking system",
    "student class timetable management system",
    "parent communication system for schools",
    "school performance monitoring system",
    "customizable school administration software",
    "digital school administration tools",
    "school dashboard management system",
    "comprehensive school ERP platform",
    "attendance management for schools",
    "teacher student communication portal",
    "advanced school management software",
    "fee management system for schools",
    "school app for homework submission",
    "school online payment integration",
    "classroom management software for schools",
    "student report management system",
    "online gradebook for schools",
    "academic tracking for students",
    "personalized learning management system",
    "advanced school ERP solutions",
    "school management software with mobile access",
    "AI-powered school attendance system",
    "school library book management",
    "student portal for academic records",
    "school transportation route management",
    "hostel fee management software",
    "school event scheduling system",
    "classroom attendance tracking system",
    "interactive learning management system",
    "school ERP software with API integration",
    "online homework submission and grading",
    "school communication and feedback system",
    "automated student performance reports",
    "school fee tracking system",
    "digital attendance and grade tracking",
    "school management tool for admins",
    "parent student school performance app",
    "real-time school attendance management",
    "academic performance prediction software"
  ],  
  authors: [{ name: "Academics-Pro Team", url: "https://academics-pro.com" }],
  creator: "Academics-Pro & Team",
  applicationName: "Academics-Pro",
  generator: "Next.js 15",
  openGraph: {
    title: "Academics-Pro | Best School Management System",
    description: "Academics-Pro simplifies school management with an intuitive interface and powerful features.",
    url: "https://academics-pro.com",
    siteName: "Academics-Pro",
    images: [
      {
        url: "https://academics-pro.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Academics-Pro School Management System",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AcademicsPro",
    title: "Academics-Pro | Best School Management System",
    description: "Manage schools efficiently with Academics-Pro, an all-in-one school management system.",
    images: ["https://academics-pro.com/twitter-card.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://academics-pro.com"),
};

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://academics-pro.com" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />

        {/* Favicon and Apple Touch Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Academics-Pro",
              "url": "https://academics-pro.com",
              "description": "A powerful school management system designed to streamline administrative tasks.",
              "publisher": {
                "@type": "Organization",
                "name": "Academics-Pro",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://academics-pro.com/logo.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://academics-pro.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F4VLMJZ4B5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'G-F4VLMJZ4B5');
    `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Schema Markup for Schools */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Academics-Pro",
              "url": "https://academics-pro.com",
              "logo": "https://academics-pro.com/logo.png",
              "description": "Academics-Pro provides a cloud-based school management system for administrators, teachers, and students.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/AcademicsPro",
                "https://www.linkedin.com/company/academics-pro",
                "https://twitter.com/AcademicsPro"
              ]
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
