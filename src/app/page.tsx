import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, GraduationCap, MessageCircle, Target, Star, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-riseon-cream to-white py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-riseon-green mb-6 leading-tight'>
                From Pages to <span className='text-transparent bg-clip-text bg-gradient-to-r from-riseon-green to-green-700'>Possibilities</span>
              </h1>
              <p className='text-lg md:text-xl text-gray-700 mb-8 leading-relaxed'>
                Located in Toronto, RiseOn Education transforms learning into limitless opportunities through elite K-12 tutoring and admissions counseling. We nurture confident,
                well-rounded high achievers.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button size='lg' className='bg-riseon-green hover:bg-riseon-green/90 text-white px-8 py-3'>
                  <Calendar className='w-5 h-5 mr-2' />
                  Book Free Consultation
                </Button>
                <Button size='lg' variant='outline' className='border-riseon-green text-riseon-green hover:bg-riseon-green hover:text-white px-8 py-3'>
                  <Link href='/services'>Learn More</Link>
                </Button>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-riseon-green rounded-2xl p-6 shadow-2xl'>
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
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4 hover:bg-riseon-cream hover:text-riseon-green'>Our Services</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Comprehensive Academic Excellence</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>We offer personalized academic support designed to unlock your full potential and guide you to excellence.</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <BookOpen className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>K-12 English Tutoring</CardTitle>
                <CardDescription>Master language arts with personalized instruction that builds strong communication foundations.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <Users className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>K-12 French Tutoring</CardTitle>
                <CardDescription>Develop bilingual proficiency with expert French language instruction tailored to Canadian curriculum.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <GraduationCap className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Admissions Counseling</CardTitle>
                <CardDescription>Navigate high school and college admissions with strategic guidance from experienced counselors.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <MessageCircle className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Public Speaking</CardTitle>
                <CardDescription>Build confidence and communication skills through comprehensive public speaking training.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <Target className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Executive Functions</CardTitle>
                <CardDescription>Develop essential organizational and time management skills for academic success.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <Star className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>1:1 Academic Supervision</CardTitle>
                <CardDescription>Personalized academic supervision program designed for comprehensive student development.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <Badge className='bg-riseon-green text-white mb-4'>About RiseOn Education</Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-6'>Transforming Learning Into Limitless Opportunities</h2>
              <p className='text-lg text-gray-700 mb-6'>
                Located in the vibrant city of Toronto, RiseOn Education is dedicated to transforming learning into limitless opportunities. We specialize in elite K-12 tutoring
                and admissions counseling, offering personalized academic support that goes beyond traditional teaching.
              </p>
              <p className='text-lg text-gray-700 mb-8'>
                Our mission is to nurture confident, well-rounded high achievers by combining rigorous academics with holistic development. Whether mastering languages, refining
                communication, or building resilience, we empower students to rise above challenges and unlock their full potential.
              </p>
            </div>
            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 shadow-xl'>
                <blockquote className='text-lg italic text-gray-700 mb-6'>
                  &quot;At RiseOn Education, we don&apos;t just teach—we inspire futures. From pages to possibilities, we guide the next generation to excellence.&quot;
                </blockquote>
                <div className='flex items-center'>
                  <div className='w-12 h-12 bg-riseon-green rounded-full flex items-center justify-center mr-4'>
                    <GraduationCap className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className='font-semibold text-riseon-green'>RiseOn Education Team</p>
                    <p className='text-sm text-gray-600'>Dedicated Educators</p>
                  </div>
                </div>
              </div>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                <div className='text-center p-4 bg-white rounded-2xl shadow-xl'>
                  <h3 className='text-2xl font-bold text-riseon-green'>500+</h3>
                  <p className='text-gray-600'>Students Served</p>
                </div>
                <div className='text-center p-4 bg-white rounded-2xl shadow-xl'>
                  <h3 className='text-2xl font-bold text-riseon-green'>95%</h3>
                  <p className='text-gray-600'>Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4 hover:bg-riseon-cream hover:text-riseon-green'>Get In Touch</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Ready to Rise with Us?</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>Take the first step towards academic excellence. Contact us today to schedule your free consultation.</p>
          </div>

          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-bold text-riseon-green mb-6'>Contact Information</h3>
              <div className='space-y-4 mb-8'>
                <div className='flex items-center mb-10'>
                  <MapPin className='w-5 h-5 text-riseon-green mr-3' />
                  <div>
                    <p className='font-semibold text-gray-900'>Address</p>
                    <p className='text-gray-600'>130 Esna Park Drive, Unit 2B, Markham, ON</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='flex items-center lg:mr-32 mr-16'>
                    <Phone className='w-5 h-5 text-riseon-green mr-3' />
                    <div>
                      <p className='font-semibold text-gray-900'>Phone</p>
                      <p className='text-gray-600'>437-688-1001</p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <Mail className='w-5 h-5 text-riseon-green mr-3' />
                    <div>
                      <p className='font-semibold text-gray-900'>Email</p>
                      <p className='text-gray-600'>contact@riseoneducation.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className='bg-white rounded-xl shadow-md overflow-hidden border border-riseon-cream'>
                <div className='bg-riseon-green px-4 py-3'>
                  <h4 className='text-white font-semibold text-sm'>Find Us</h4>
                </div>
                <div className='relative h-64'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8844444444444!2d-79.3791!3d43.8561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d39c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s130%20Esna%20Park%20Dr%2C%20Markham%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890'
                    className='w-full h-full border-0'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='RiseOn Education Location - 130 Esna Park Drive, Unit 2B, Markham, ON'
                  ></iframe>
                </div>
                <div className='px-4 py-3 bg-riseon-cream/30'>
                  <p className='text-sm text-gray-600'>
                    <MapPin className='w-4 h-4 inline mr-1 text-riseon-green' />
                    Unit 2B, 130 Esna Park Drive, Markham
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-riseon-cream/50 rounded-2xl p-8 flex justify-center items-center'>
              <div>
                <h3 className='text-2xl font-bold text-riseon-green lg:mb-20 mb-10'>Schedule Your Free Consultation</h3>
                <div className='space-y-6'>
                  <Button className='w-full bg-riseon-green hover:bg-riseon-green/90 text-white py-3'>
                    <Calendar className='w-5 h-5 mr-2' />
                    Book Free Consultation
                  </Button>
                  <Button variant='outline' className='w-full border-riseon-green text-riseon-green hover:bg-riseon-green hover:text-white py-3'>
                    <MessageCircle className='w-5 h-5 mr-2' />
                    Send Message
                  </Button>
                </div>
                <p className='text-sm text-gray-600 mt-6 text-center'>Elevate your education. Rise with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
