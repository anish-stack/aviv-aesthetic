import Header from '@/components/shared/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Dermatology &amp; Skin Care Specialist - AVIV Aesthetics',
  description:
    'Discover AVIV Aesthetics dermatology and skin care specialist. Our skin specialist provides personalized treatments for healthy glow.',
  metadataBase: new URL('https://avivaesthetics.in'),
  alternates: {
    canonical: '/media',
  },
};
const Media = () => {
  return (
    <div>
      <Header />
      <div className='lg:container px-10 lg:pt-32 pt-14  '>
        <div>
          <h1 className='text-4xl text-center mt-5 '>Media</h1>
        </div>
      </div>
    </div>
  );
};

export default Media;
