import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, GraduationCap, MessageCircle, Target, Star, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | RiseOn Education | K-12 Tutoring & Admissions Counseling in Toronto',
  description:
    'Comprehensive K-12 tutoring services including English, French, public speaking, executive functions, and admissions counseling. Elite personalized education programs in Toronto and Markham.',
  keywords:
    'K-12 tutoring services Toronto, English tutoring, French tutoring, admissions counseling, public speaking, executive functions, academic supervision, Markham tutoring',
  openGraph: {
    title: 'Comprehensive K-12 Tutoring Services | RiseOn Education',
    description: 'Elite tutoring and admissions counseling services designed to unlock your full academic potential.',
    url: 'https://riseon-education.com/services',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function ServicesPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='bg-white shadow-sm border-b border-riseon-cream sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Link href='/' className='flex items-center space-x-3'>
              <div className='w-10 h-10 flex items-center justify-center'>
                <Image src='/home/icon-only.png' alt='RiseOn Education Icon' width={40} height={40} className='object-contain' />
              </div>
              <div>
                <h1 className='text-xl font-bold text-riseon-green'>RiseOn Education</h1>
                <p className='text-xs text-gray-600 hidden sm:block'>From Pages to Possibilities</p>
              </div>
            </Link>
            <div className='hidden md:flex space-x-6'>
              <Link href='/services' className='text-riseon-green hover:text-opacity-80 font-medium border-b-2 border-riseon-green'>
                Services
              </Link>
              <Link href='/about' className='text-riseon-green hover:text-opacity-80 font-medium'>
                About
              </Link>
              <Link href='/#contact' className='text-riseon-green hover:text-opacity-80 font-medium'>
                Contact
              </Link>
            </div>
            <Link href='/#contact'>
              <Button className='bg-riseon-green hover:bg-riseon-green/90 text-white'>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-riseon-cream to-white py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <Badge className='bg-riseon-green text-white mb-6'>Our Services</Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-riseon-green mb-6 leading-tight'>
              Comprehensive Academic <span className='text-transparent bg-clip-text bg-gradient-to-r from-riseon-green to-green-700'>Excellence</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              We offer personalized academic support designed to unlock your full potential and guide you to excellence. Our comprehensive programs are tailored to meet each
              student&apos;s unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16 mb-20'>
            {/* K-12 English Tutoring */}
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center'>
                  <BookOpen className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>K-12 English Tutoring</h2>
                  <p className='text-gray-600'>Master language arts with personalized instruction</p>
                </div>
              </div>
              <p className='text-lg text-gray-700'>
                Our English tutoring program builds strong communication foundations through personalized instruction that adapts to each student&apos;s learning style and academic
                level.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Reading comprehension and analysis</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Creative and academic writing skills</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Grammar and vocabulary development</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Literary analysis and critical thinking</span>
                </div>
              </div>
            </div>

            {/* K-12 French Tutoring */}
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center'>
                  <Users className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>K-12 French Tutoring</h2>
                  <p className='text-gray-600'>Develop bilingual proficiency with expert instruction</p>
                </div>
              </div>
              <p className='text-lg text-gray-700'>
                Develop bilingual proficiency with our expert French language instruction, specifically tailored to the Canadian curriculum and immersion programs.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>French immersion program support</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Conversational fluency development</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>French literature and culture</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>DELF/DALF exam preparation</span>
                </div>
              </div>
            </div>
          </div>

          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Admissions Counseling */}
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center'>
                  <GraduationCap className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>Admissions Counseling</h2>
                  <p className='text-gray-600'>Navigate admissions with strategic guidance</p>
                </div>
              </div>
              <p className='text-lg text-gray-700'>
                Navigate high school and college admissions with strategic guidance from our experienced counselors who understand the competitive landscape.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>High school application strategy</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>University admissions planning</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Essay writing and personal statements</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Interview preparation and coaching</span>
                </div>
              </div>
            </div>

            {/* Public Speaking */}
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center'>
                  <MessageCircle className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>Public Speaking</h2>
                  <p className='text-gray-600'>Build confidence and communication skills</p>
                </div>
              </div>
              <p className='text-lg text-gray-700'>
                Build confidence and exceptional communication skills through our comprehensive public speaking training program designed for students of all levels.
              </p>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Speech writing and structure</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Presentation skills and body language</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Debate and persuasive speaking</span>
                </div>
                <div className='flex items-center space-x-3'>
                  <CheckCircle className='w-5 h-5 text-riseon-green' />
                  <span className='text-gray-700'>Confidence building exercises</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Additional Specialized Programs</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>Comprehensive support programs designed to develop essential life skills and academic success strategies.</p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <Card className='border-riseon-cream shadow-lg'>
              <CardHeader>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center'>
                    <Target className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <CardTitle className='text-xl text-riseon-green'>Executive Functions</CardTitle>
                    <CardDescription>Essential organizational and time management skills</CardDescription>
                  </div>
                </div>
                <CardContent className='pl-0'>
                  <p className='text-gray-700 mb-4'>
                    Develop essential organizational and time management skills that form the foundation for academic success and lifelong learning.
                  </p>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Time management and planning</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Study strategies and note-taking</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Goal setting and achievement</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Stress management techniques</span>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream shadow-lg'>
              <CardHeader>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center'>
                    <Star className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <CardTitle className='text-xl text-riseon-green'>1:1 Academic Supervision</CardTitle>
                    <CardDescription>Personalized comprehensive student development</CardDescription>
                  </div>
                </div>
                <CardContent className='pl-0'>
                  <p className='text-gray-700 mb-4'>
                    Our flagship personalized academic supervision program provides comprehensive support tailored to each student&apos;s unique learning journey.
                  </p>
                  <div className='space-y-2'>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Customized learning plans</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Regular progress monitoring</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Parent and teacher communication</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <ArrowRight className='w-4 h-4 text-riseon-green' />
                      <span className='text-sm text-gray-700'>Holistic development focus</span>
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4 hover:bg-riseon-cream hover:text-riseon-green'>Our Process</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>How We Work With You</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Our proven four-step process ensures every student receives personalized attention and achieves their academic goals.
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-riseon-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>1</div>
              <h3 className='text-lg font-semibold text-riseon-green mb-2'>Assessment</h3>
              <p className='text-gray-600 text-sm'>Comprehensive evaluation of student&apos;s current level and learning style</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-riseon-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>2</div>
              <h3 className='text-lg font-semibold text-riseon-green mb-2'>Planning</h3>
              <p className='text-gray-600 text-sm'>Custom learning plan developed based on goals and assessment results</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-riseon-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>3</div>
              <h3 className='text-lg font-semibold text-riseon-green mb-2'>Implementation</h3>
              <p className='text-gray-600 text-sm'>Personalized tutoring sessions with regular progress monitoring</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-riseon-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>4</div>
              <h3 className='text-lg font-semibold text-riseon-green mb-2'>Success</h3>
              <p className='text-gray-600 text-sm'>Achieve academic goals and develop lifelong learning skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-riseon-green text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Transform Your Academic Journey?</h2>
          <p className='text-xl mb-8 text-white/90 max-w-3xl mx-auto'>
            Schedule your free consultation today and discover how our personalized approach can help you achieve academic excellence.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='bg-white text-riseon-green hover:bg-gray-100 px-8 py-3'>
              <Link href='/#contact' className='flex'>
                <Calendar className='w-5 h-5 mr-2' />
                Book Free Consultation
              </Link>
            </Button>

            <Button size='lg' variant='outline' className='border-white bg-white text-riseon-green px-8 py-3'>
              <Link href='/about' className='flex'>
                Learn About Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-riseon-green text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div>
              <Link href='/' className='flex items-center space-x-3 mb-4'>
                <div>
                  <h3 className='text-xl font-bold'>RiseOn Education</h3>
                  <p className='text-sm text-white/80'>From Pages to Possibilities</p>
                </div>
              </Link>
              <p className='text-white/80'>Transforming learning into limitless opportunities through elite K-12 tutoring and admissions counseling.</p>
            </div>

            <div>
              <h4 className='text-lg font-semibold mb-4'>Services</h4>
              <ul className='space-y-2 text-white/80'>
                <li>K-12 English Tutoring</li>
                <li>K-12 French Tutoring</li>
                <li>Admissions Counseling</li>
                <li>Public Speaking</li>
                <li>Executive Functions</li>
                <li>1:1 Academic Supervision</li>
              </ul>
            </div>

            <div>
              <h4 className='text-lg font-semibold mb-4'>Contact</h4>
              <div className='space-y-2 text-white/80'>
                <p>130 Esna Park Drive, Unit 2B</p>
                <p>Markham, ON</p>
                <p>Toronto Area</p>
              </div>
            </div>
          </div>

          <div className='border-t border-white/20 mt-12 pt-8 text-center text-white/60'>
            <p>&copy; 2025 RiseOn Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
