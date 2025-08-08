import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Aleo } from 'next/font/google';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const aleo = Aleo({
  subsets: ['latin'],
  variable: '--font-aleo',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'RiseOn Education | From Pages to Possibilities | K-12 Tutoring & Admissions Counseling',
  description:
    'Elite K-12 tutoring and admissions counseling in Toronto. Personalized academic support in English, French, public speaking, and executive functions. Empowering students to rise above challenges.',
  keywords: 'K-12 tutoring Toronto, admissions counseling, English tutoring, French tutoring, public speaking, executive functions, academic supervision, Markham education',
  authors: [{ name: 'RiseOn Education' }],
  creator: 'RiseOn Education',
  publisher: 'RiseOn Education',
  robots: 'index, follow',
  openGraph: {
    title: 'RiseOn Education | From Pages to Possibilities',
    description: 'Elite K-12 tutoring and admissions counseling in Toronto. Transforming learning into limitless opportunities.',
    url: 'https://riseon-education.com',
    siteName: 'RiseOn Education',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiseOn Education | From Pages to Possibilities',
    description: 'Elite K-12 tutoring and admissions counseling in Toronto. Transforming learning into limitless opportunities.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2D442D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${aleo.variable} ${geistSans.variable} ${geistMono.variable} font-aleo antialiased`}>{children}</body>
    </html>
  );
}
