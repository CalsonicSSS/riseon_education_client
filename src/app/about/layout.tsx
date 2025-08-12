import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | RiseOn Education | Expert K-12 Tutoring Team in Toronto',
  description:
    'Meet the passionate educators and founders behind RiseOn Education. Learn about our mission to transform learning into limitless opportunities through personalized K-12 tutoring and admissions counseling in Toronto.',
  keywords: 'about RiseOn Education, Toronto tutoring team, education founders, K-12 tutors, admissions counselors, Markham educators',
  openGraph: {
    title: 'About RiseOn Education | Expert Educators in Toronto',
    description: 'Meet our passionate team of educators dedicated to transforming learning into limitless opportunities.',
    url: 'https://riseon-education.com/about',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
