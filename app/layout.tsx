import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  
  title: "Academics-Pro",
  description: "Created By Academics-pro & Team",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
 
      </head>
      <body
        className={`bg-background text-foreground antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
