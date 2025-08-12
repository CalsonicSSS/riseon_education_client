'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

// Metadata will be handled in layout or moved to separate metadata file

// Student testimonials data
const testimonials = [
  {
    name: 'Sarah Chen',
    grade: 'Grade 12',
    text: "RiseOn Education helped me improve my English grades from B+ to A+ and guided me through the university application process. I'm now studying at my dream school!",
    program: 'English Tutoring & Admissions Counseling',
  },
  {
    name: 'Marcus Johnson',
    grade: 'Grade 10',
    text: 'The French tutoring program was amazing! I went from struggling with basic conversations to being confident in my French immersion classes.',
    program: 'French Tutoring',
  },
  {
    name: 'Emily Zhang',
    grade: 'Grade 11',
    text: 'The public speaking coaching transformed my confidence. I used to be terrified of presentations, now I actually enjoy them and recently won our school debate!',
    program: 'Public Speaking & Executive Functions',
  },
  {
    name: 'Alex Rodriguez',
    grade: 'Grade 9',
    text: 'The 1:1 academic supervision helped me develop study habits that work for me. My grades improved across all subjects and I feel more organized than ever.',
    program: '1:1 Academic Supervision',
  },
  {
    name: 'Priya Patel',
    grade: 'Grade 12',
    text: "Thanks to RiseOn's admissions counseling, I received acceptance letters from all my top choice universities. Their essay guidance was invaluable!",
    program: 'Admissions Counseling',
  },
];

// Testimonials Carousel Component
function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className='relative'>
      <div className='overflow-hidden rounded-2xl' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='flex transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='w-full flex-shrink-0 px-4'>
              <Card className='border-riseon-cream shadow-lg mx-auto max-w-4xl'>
                <CardHeader className='text-center p-8'>
                  <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mx-auto mb-6'>
                    <Quote className='w-8 h-8 text-white' />
                  </div>
                  <blockquote className='text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed'>&quot;{testimonial.text}&quot;</blockquote>
                  <div className='flex flex-col items-center space-y-2'>
                    <CardTitle className='text-riseon-green text-xl'>{testimonial.name}</CardTitle>
                    <CardDescription className='text-gray-600'>{testimonial.grade}</CardDescription>
                    <Badge className='bg-riseon-cream text-riseon-green text-sm'>{testimonial.program}</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className='absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-riseon-cream rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10'
        aria-label='Previous testimonial'
      >
        <ChevronLeft className='w-6 h-6 text-riseon-green' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm border border-riseon-cream rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10'
        aria-label='Next testimonial'
      >
        <ChevronRight className='w-6 h-6 text-riseon-green' />
      </button>

      {/* Dot Indicators */}
      <div className='flex justify-center mt-8 space-x-2'>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-riseon-green' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <NavBar />

      {/* Hero Section with Background Image */}
      <section
        className='relative py-20 lg:py-28 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(/about/hero.webp)',
        }}
      >
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
          <div className='text-center'>
            <Badge className='bg-white/90 backdrop-blur-sm text-riseon-green mb-6 border border-white/20'>About RiseOn Education</Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg'>
              Transforming Learning Into{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 drop-shadow-lg'>Limitless Opportunities</span>
            </h1>
            <p className='text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md'>
              Located in the vibrant city of Toronto, RiseOn Education is dedicated to nurturing confident, well-rounded high achievers through elite K-12 tutoring and admissions
              counseling.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-6'>Who We Are</h2>
            <p className='text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              RiseOn Education was founded with a simple yet powerful vision: to transform the educational landscape by providing personalized, high-quality tutoring that goes
              beyond traditional teaching methods. We believe that every student possesses unique talents and potential waiting to be unlocked through the right guidance and
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
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
              <Image src='/about/school.png' alt='School and Education' width={500} height={300} className='object-contain max-w-full max-h-full' />
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-green text-white mb-4'>Student Success Stories</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>What Our Students Say</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>Hear from our students who have transformed their academic journey with RiseOn Education.</p>
          </div>

          {/* Testimonials Carousel */}
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Our Impact</h2>
            <p className='text-lg text-gray-600'>Building success stories one student at a time</p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            <div className='text-center p-6 bg-white rounded-xl shadow-lg'>
              <h3 className='text-3xl md:text-4xl font-bold text-riseon-green mb-2'>500+</h3>
              <p className='text-gray-700 font-medium'>Students Served</p>
            </div>
            <div className='text-center p-6 bg-white rounded-xl shadow-lg'>
              <h3 className='text-3xl md:text-4xl font-bold text-riseon-green mb-2'>95%</h3>
              <p className='text-gray-700 font-medium'>Success Rate</p>
            </div>
            <div className='text-center p-6 bg-white rounded-xl shadow-lg'>
              <h3 className='text-3xl md:text-4xl font-bold text-riseon-green mb-2'>50+</h3>
              <p className='text-gray-700 font-medium'>School Partnerships</p>
            </div>
            <div className='text-center p-6 bg-white rounded-xl shadow-lg'>
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
              <Button size='lg' variant='outline' className='border-white bg-white text-riseon-green px-8 py-3'>
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
