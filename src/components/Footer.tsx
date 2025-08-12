import { MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react';

export function Footer() {
  return (
    <footer className='bg-riseon-green text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <div className='flex items-center space-x-3 mb-4'>
              <div>
                <h3 className='text-xl font-bold'>RiseOn Education</h3>
                <p className='text-sm text-white/80'>From Pages to Possibilities</p>
              </div>
            </div>
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
              <span>130 Esna Park Drive, Unit 2B | </span>
              <span>Markham, ON | </span>
              <span>Toronto Area</span>
            </div>
            {/* add actual contact information with phone and email with icon*/}
            <div className='space-y-2 text-white/80 mt-5'>
              <p>
                <PhoneIcon className='inline-block mr-2' /> Phone: 437-688-1001
              </p>
              <p>
                <MailIcon className='inline-block mr-2' /> Email: contact@riseoneducation.com
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-white/20 mt-12 pt-8 text-center text-white/60'>
          <p>&copy; 2025 RiseOn Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
