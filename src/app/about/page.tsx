import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Heart, Lightbulb } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

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

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-riseon-cream to-white py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <Badge className='bg-riseon-green text-white mb-6'>About RiseOn Education</Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-riseon-green mb-6 leading-tight'>
              Transforming Learning Into <span className='text-transparent bg-clip-text bg-gradient-to-r from-riseon-green to-green-700'>Limitless Opportunities</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              Located in the vibrant city of Toronto, RiseOn Education is dedicated to nurturing confident, well-rounded high achievers through elite K-12 tutoring and admissions
              counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-6'>Our Mission</h2>
              <p className='text-lg text-gray-700 mb-6'>
                At RiseOn Education, we believe that every student has unlimited potential. Our mission is to unlock this potential through personalized academic support that
                combines rigorous academics with holistic development.
              </p>
              <p className='text-lg text-gray-700 mb-8'>
                Whether mastering languages, refining communication skills, or building resilience, we empower students to rise above challenges and achieve excellence in every
                aspect of their academic journey.
              </p>
              <div className='flex flex-wrap gap-4'>
                <Badge className='bg-riseon-cream text-riseon-green'>Personalized Learning</Badge>
                <Badge className='bg-riseon-cream text-riseon-green'>Holistic Development</Badge>
                <Badge className='bg-riseon-cream text-riseon-green'>Academic Excellence</Badge>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-riseon-green rounded-2xl p-8 shadow-2xl'>
                <div className='w-full h-64 bg-riseon-cream rounded-xl flex items-center justify-center p-6'>
                  <Image
                    src='/home/full-logo-opposite-transparent-2.png'
                    alt='RiseOn Education - From Pages to Possibilities'
                    width={300}
                    height={200}
                    className='object-contain max-w-full max-h-full'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='border-riseon-cream hover:shadow-lg transition-shadow text-center'>
              <CardHeader>
                <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Award className='w-8 h-8 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Excellence</CardTitle>
                <CardDescription>We strive for the highest standards in everything we do, ensuring our students receive world-class education and support.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow text-center'>
              <CardHeader>
                <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Heart className='w-8 h-8 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Compassion</CardTitle>
                <CardDescription>We understand each student&apos;s unique journey and provide supportive, nurturing guidance tailored to their individual needs.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow text-center'>
              <CardHeader>
                <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Lightbulb className='w-8 h-8 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Innovation</CardTitle>
                <CardDescription>We employ cutting-edge teaching methods and technology to create engaging, effective learning experiences.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-green text-white mb-4'>Our Team</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Meet Our Founders & Educators</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Our passionate team of educators and leaders are dedicated to helping students achieve their academic goals and unlock their full potential.
            </p>
          </div>

          {/* Co-founders */}
          <div className='grid md:grid-cols-2 gap-8 mb-16'>
            <Card className='border-riseon-cream shadow-lg text-center'>
              <CardHeader className='pb-4'>
                <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200'>
                  <div className='w-full h-full bg-gradient-to-br from-riseon-green to-green-700 flex items-center justify-center'>
                    <span className='text-3xl font-bold text-white'>CF1</span>
                  </div>
                </div>
                <CardTitle className='text-xl text-riseon-green'>Co-Founder Name</CardTitle>
                <CardDescription className='text-sm text-gray-600 mb-4'>Co-Founder & Chief Executive Officer</CardDescription>
                <p className='text-gray-700 text-sm leading-relaxed'>
                  With over 15 years in education and a passion for personalized learning, our co-founder brings extensive experience in curriculum development and student
                  mentorship to RiseOn Education.
                </p>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream shadow-lg text-center'>
              <CardHeader className='pb-4'>
                <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200'>
                  <div className='w-full h-full bg-gradient-to-br from-riseon-green to-green-700 flex items-center justify-center'>
                    <span className='text-3xl font-bold text-white'>CF2</span>
                  </div>
                </div>
                <CardTitle className='text-xl text-riseon-green'>Co-Founder Name</CardTitle>
                <CardDescription className='text-sm text-gray-600 mb-4'>Co-Founder & Chief Academic Officer</CardDescription>
                <p className='text-gray-700 text-sm leading-relaxed'>
                  A former university admissions counselor with expertise in K-12 education, our co-founder specializes in helping students navigate the complex admissions
                  landscape with confidence.
                </p>
              </CardHeader>
            </Card>
          </div>

          {/* Other Educators */}
          <div className='grid md:grid-cols-3 gap-6'>
            <Card className='border-riseon-cream hover:shadow-lg transition-shadow text-center'>
              <CardHeader className='pb-4'>
                <div className='w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200'>
                  <div className='w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center'>
                    <span className='text-lg font-bold text-white'>E1</span>
                  </div>
                </div>
                <CardTitle className='text-lg text-riseon-green'>English Specialist</CardTitle>
                <CardDescription className='text-sm text-gray-600 mb-3'>Senior Language Arts Instructor</CardDescription>
                <p className='text-gray-700 text-xs leading-relaxed'>Specialized in K-12 English curriculum with expertise in creative writing and literature analysis.</p>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow text-center'>
              <CardHeader className='pb-4'>
                <div className='w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200'>
                  <div className='w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center'>
                    <span className='text-lg font-bold text-white'>E2</span>
                  </div>
                </div>
                <CardTitle className='text-lg text-riseon-green'>French Specialist</CardTitle>
                <CardDescription className='text-sm text-gray-600 mb-3'>Bilingual Education Expert</CardDescription>
                <p className='text-gray-700 text-xs leading-relaxed'>Native French speaker with certification in French immersion and bilingual education programs.</p>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow text-center'>
              <CardHeader className='pb-4'>
                <div className='w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200'>
                  <div className='w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center'>
                    <span className='text-lg font-bold text-white'>E3</span>
                  </div>
                </div>
                <CardTitle className='text-lg text-riseon-green'>Communications Coach</CardTitle>
                <CardDescription className='text-sm text-gray-600 mb-3'>Public Speaking & Executive Function</CardDescription>
                <p className='text-gray-700 text-xs leading-relaxed'>Former corporate trainer specializing in communication skills and executive function development.</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Our Impact</h2>
            <p className='text-lg text-gray-600'>Building success stories one student at a time</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center p-6 bg-riseon-cream/50 rounded-xl'>
              <h3 className='text-3xl md:text-4xl font-bold text-riseon-green mb-2'>500+</h3>
              <p className='text-gray-700 font-medium'>Students Served</p>
            </div>
            <div className='text-center p-6 bg-riseon-cream/50 rounded-xl'>
              <h3 className='text-3xl md:text-4xl font-bold text-riseon-green mb-2'>95%</h3>
              <p className='text-gray-700 font-medium'>Success Rate</p>
            </div>
            <div className='text-center p-6 bg-riseon-cream/50 rounded-xl'>
              <h3 className='text-3xl md:text-4xl font-bold text-riseon-green mb-2'>50+</h3>
              <p className='text-gray-700 font-medium'>School Partnerships</p>
            </div>
            <div className='text-center p-6 bg-riseon-cream/50 rounded-xl'>
              <h3 className='text-3xl md:text-4xl font-bold text-riseon-green mb-2'>10+</h3>
              <p className='text-gray-700 font-medium'>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-riseon-green text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Start Your Journey?</h2>
          <p className='text-xl mb-8 text-white/90 max-w-3xl mx-auto'>Join the hundreds of students who have transformed their academic potential with RiseOn Education.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/#contact'>
              <Button size='lg' className='bg-white text-riseon-green hover:bg-gray-100 px-8 py-3'>
                <Calendar className='w-5 h-5 mr-2' />
                Book Free Consultation
              </Button>
            </Link>
            <Link href='/services'>
              <Button size='lg' variant='outline' className='border-white  bg-white text-riseon-green px-8 py-3'>
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
