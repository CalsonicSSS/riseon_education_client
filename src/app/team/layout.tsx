import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | RiseOn Education | Expert K-12 Tutors & Educators in Toronto',
  description:
    'Meet our passionate team of experienced K-12 tutors, admissions counselors, and educational specialists. Our co-founders and expert educators are dedicated to helping students achieve academic excellence in Toronto and Markham.',
  keywords: 'RiseOn Education team, Toronto tutors, K-12 educators, admissions counselors, English tutors, French tutors, public speaking coaches, Markham teachers',
  openGraph: {
    title: 'Meet Our Expert Education Team | RiseOn Education',
    description: 'Our passionate team of experienced educators and specialists are committed to helping every student reach their full potential.',
    url: 'https://riseon-education.com/team',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
