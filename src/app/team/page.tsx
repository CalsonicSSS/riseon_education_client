'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Target, MailIcon } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { coFounders, teachers, TeamMemberCard } from '@/components/TeamMemberCard';

export default function TeamPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-riseon-cream to-white py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <Badge className='bg-riseon-green text-white mb-6'>Our Team</Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-riseon-green mb-6 leading-tight'>
              Meet Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-riseon-green to-green-700'>Passionate Educators</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              Our dedicated team of experienced educators and specialists are committed to helping every student reach their full potential through personalized, innovative
              teaching approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4'>Leadership</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Meet Our Co-Founders</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              The visionary leaders who founded RiseOn Education with a mission to transform learning into limitless opportunities.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            {coFounders.map((founder, index) => (
              <TeamMemberCard key={index} member={founder} isFounder={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Team Section */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-green text-white mb-4'>Teaching Excellence</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Our Expert Educators</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Our carefully selected team of specialist tutors and coaches bring years of experience and proven success in their respective fields.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {teachers.map((teacher, index) => (
              <TeamMemberCard key={index} member={teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* Values & Approach Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4'>Our Approach</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Why Our Team Makes the Difference</h2>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='border-riseon-cream text-center p-6'>
              <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mx-auto mb-4'>
                <BookOpen className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-riseon-green mb-3'>Personalized Expertise</h3>
              <p className='text-gray-700'>Each team member specializes in specific areas, allowing us to match students with the perfect educator for their unique needs.</p>
            </Card>

            <Card className='border-riseon-cream text-center p-6'>
              <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-riseon-green mb-3'>Collaborative Support</h3>
              <p className='text-gray-700'>Our team works together to ensure comprehensive support, sharing insights and strategies for optimal student outcomes.</p>
            </Card>

            <Card className='border-riseon-cream text-center p-6'>
              <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mx-auto mb-4'>
                <Target className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-riseon-green mb-3'>Results-Driven</h3>
              <p className='text-gray-700'>With proven track records and measurable success rates, our team is committed to delivering tangible academic improvements.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <Badge className='bg-riseon-green text-white mb-4'>Careers</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-6'>Join Our Growing Team</h2>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto mb-8'>
              Are you a passionate educator looking to make a real difference in students&apos; lives? We&apos;re always looking for exceptional talent to join our mission.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' className='bg-riseon-green hover:bg-riseon-green/90 text-white px-8 py-3'>
                <MailIcon className='w-5 h-5 mr-2' />
                View Open Positions
              </Button>
              <Button size='lg' variant='outline' className='border-riseon-green text-riseon-green hover:bg-riseon-green hover:text-white px-8 py-3'>
                Submit Your Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
