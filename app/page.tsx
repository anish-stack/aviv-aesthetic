import Banner from '@/components/homepageComponent/Banner';
import Footer from '@/components/shared/Footer';
import About from '@/components/homepageComponent/About';

import Header from '@/components/shared/Header';
import Doctors from '@/components/homepageComponent/Doctors';
import Whyus from '@/components/homepageComponent/Whyus';
import Testimonial from '@/components/homepageComponent/Testimonial';
import Faq from '@/components/shared/Faq';
import OurProcedure from '@/components/homepageComponent/OurProcedure';
import Offer from '@/components/homepageComponent/Offer';
import Categories from '@/components/homepageComponent/Categories';
import PopupBanner from '@/components/shared/PopupBanner';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Aviv Aesthetics: Leading Skin Aesthetic Clinic for Advanced Skincare',
  description:
    'As a leading Cosmetic Dermatology Center, Aviv Aesthetics has been providing patients with superior treatments for advanced skincare.',
  metadataBase: new URL('https://avivaesthetics.in/'),
  alternates: {
    canonical: '/',
  },
};
export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Banner />

      <About />
      <Categories />
      <Doctors />
      <Whyus />
      <Testimonial />
      <Faq />
      <OurProcedure />
      <Offer />
      <Footer />
    </div>
  );
}
