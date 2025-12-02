import { Link } from '@/catalyst/link';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talking About Listening To Music",
  description: "Promoting active listening, careful curation, and deeper appreciation for music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='max-w-md my-8 mx-auto'>
          <header className='mb-8'>
            <h1>
              <Link href='/' className='underline'>Talking About Listening To Music</Link>
            </h1>
          </header>
          <main className="prose prose-invert">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
