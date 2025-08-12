'use client';

import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { LinkedinIcon, MailIcon } from 'lucide-react';

// Co-founders data
export const coFounders = [
  {
    name: 'CF1',
    title: 'Co-Founder & CEO',
    image: '/team/emily-chen.jpg',
    description: 'Passionate educator with 15+ years experience transforming K-12 learning through innovative, personalized teaching methods.',
    email: 'emily@riseon-education.com',
    linkedin: 'linkedin.com/in/emily-chen-education',
  },
  {
    name: 'CF2',
    title: 'Co-Founder & Director of Operations',
    image: '/team/michael-rodriguez.jpg',
    description: 'Educational strategist specializing in admissions counseling and program development with proven student success track record.',
    email: 'michael@riseon-education.com',
    linkedin: 'linkedin.com/in/michael-rodriguez-edu',
  },
];

// Teaching team data
export const teachers = [
  {
    name: 'Sarah Thompson',
    title: 'Senior English Tutor',
    image: '/team/sarah-thompson.jpg',
    description: 'Award-winning educator helping students discover their voice in writing and develop strong critical thinking skills.',
    email: 'sarah@riseon-education.com',
    linkedin: 'linkedin.com/in/sarah-thompson-edu',
  },
  {
    name: 'Dr. François Dubois',
    title: 'French Language Specialist',
    image: '/team/francois-dubois.jpg',
    description: 'Native French speaker bringing authentic language expertise and cultural knowledge to bilingual education.',
    email: 'francois@riseon-education.com',
    linkedin: 'linkedin.com/in/francois-dubois-edu',
  },
  {
    name: 'Alexandra Kim',
    title: 'Public Speaking Coach',
    image: '/team/alexandra-kim.jpg',
    description: 'Former media professional empowering students to overcome speaking anxiety and develop confident presentation skills.',
    email: 'alexandra@riseon-education.com',
    linkedin: 'linkedin.com/in/alexandra-kim-edu',
  },
  {
    name: 'Dr. James Liu',
    title: 'Academic Support Specialist',
    image: '/team/james-liu.jpg',
    description: 'Learning specialist focused on developing executive function skills and effective study strategies for academic success.',
    email: 'james@riseon-education.com',
    linkedin: 'linkedin.com/in/james-liu-edu',
  },
  {
    name: 'Rachel Martinez',
    title: 'Admissions Counselor',
    image: '/team/rachel-martinez.jpg',
    description: 'Former university admissions officer guiding students through competitive application processes with insider expertise.',
    email: 'rachel@riseon-education.com',
    linkedin: 'linkedin.com/in/rachel-martinez-edu',
  },
  {
    name: 'David Park',
    title: 'Mathematics & Science Tutor',
    image: '/team/david-park.jpg',
    description: 'STEM specialist making complex mathematical concepts accessible and engaging through innovative teaching approaches.',
    email: 'david@riseon-education.com',
    linkedin: 'linkedin.com/in/david-park-edu',
  },
];

// Team member card component
export function TeamMemberCard({ member, isFounder = false }: { member: (typeof teachers)[0] | (typeof coFounders)[0]; isFounder?: boolean }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className={`border-riseon-cream shadow-lg hover:shadow-xl transition-all duration-300 ${isFounder ? 'border-2 border-riseon-green' : ''}`}>
      <CardHeader className='text-center p-8'>
        {/* Avatar */}
        <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-riseon-cream relative'>
          {!imageError ? (
            <Image
              src={member.image}
              alt={`${member.name} - ${member.title}`}
              width={120}
              height={120}
              className='w-full h-full object-cover'
              onError={() => setImageError(true)}
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-riseon-green to-green-700 flex items-center justify-center'>
              <span className='text-white text-xl font-bold'>
                {member.name
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')}
              </span>
            </div>
          )}
        </div>

        {/* Name & Title */}
        <CardTitle className='text-riseon-green text-xl mb-2'>{member.name}</CardTitle>
        <CardDescription className='text-gray-600 font-medium mb-4'>{member.title}</CardDescription>

        {/* Description */}
        <p className='text-gray-700 text-sm leading-relaxed mb-6'>{member.description}</p>

        {/* Contact info for founders */}
        {member.email && (
          <div className='flex justify-center space-x-6 pt-4 border-t border-gray-200'>
            <a href={`mailto:${member.email}`} className='flex items-center text-riseon-green hover:text-riseon-green/80 transition-colors'>
              <MailIcon className='w-4 h-4 mr-2' />
              <span className='text-sm font-medium'>Email</span>
            </a>
            {member.linkedin && (
              <a
                href={`https://${member.linkedin}`}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-riseon-green hover:text-riseon-green/80 transition-colors'
              >
                <LinkedinIcon className='w-4 h-4 mr-2' />
                <span className='text-sm font-medium'>LinkedIn</span>
              </a>
            )}
          </div>
        )}
      </CardHeader>
    </Card>
  );
}
