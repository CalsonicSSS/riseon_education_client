'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface CalendlyButtonProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  children?: React.ReactNode;
}

export function CalendlyButton({ className = '', size = 'lg', variant = 'default', children }: CalendlyButtonProps) {
  // TODO: Replace with your actual Calendly link
  const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || '#';

  const handleCalendlyClick = () => {
    if (CALENDLY_URL === '#') {
      // Temporary alert for development
      alert('Calendly link will be added soon! Please contact us directly for now.');
      return;
    }

    // Open Calendly in new tab
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button size={size} variant={variant} className={className} onClick={handleCalendlyClick}>
      <Calendar className='w-5 h-5 mr-2' />
      {children || 'Book Free Consultation'}
    </Button>
  );
}
