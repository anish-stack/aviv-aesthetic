import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Enhance Your Beauty at AVIV Aesthetics',
  description:
    'Discover the latest trends of skin care, dermatology &amp; aesthetic treatments from AVIV Aesthetics.',
  metadataBase: new URL('https://avivaesthetics.in'),
  alternates: {
    canonical: '/blogs',
  },
};

const Blogs = () => {
  return (
    <div>
      <Header />
      <div className='lg:container px-10 lg:pt-32 pt-14  '>
        <div>
          <h1 className='text-4xl text-center mt-5 '>Blogs</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
