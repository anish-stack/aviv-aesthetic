import React from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { ContactForm } from './components/ContactForm';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book an Appointment Now - AVIV Aesthetics',
  description:
    'Connect with AVIV Aesthetics for personalized beauty care, Contact Us at +91-9319314025. Enhance your natural beauty',
  metadataBase: new URL('https://avivaesthetics.in'),
  alternates: {
    canonical: '/contact-us',
  },
};
export default async function ContactUs() {
  return (
    <>
      <Header />
      <div className='lg:container px-10 lg:pt-32 pt-14  '>
        <div>
          <h1 className='text-4xl text-center mt-5 '>Contact Us</h1>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 '>
          <div className='mt-5 '>
            <h2 className='text-2xl text-center'>
              Have Question? Write a Message
            </h2>
            <div className='mt-5  w-full'>
              <ContactForm />
            </div>
          </div>
          <div className='mt-10 bg-extraColor p-3 rounded-md'>
            <div className='mt-5'>
              <div className='flex flex-row gap-4'>
                <div>
                  <MapPin className='inline-block ml-2 bg-darkpink text-white p-1  rounded-md  h-8 w-8' />
                </div>
                <h2 className='text-2xl'>Location</h2>
              </div>
              <div className='mt-3'>
                <Image
                  src={'/images/footer-border.png'}
                  alt='border'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-auto'
                />
              </div>
              <p className='text-lg text-paragraphColor mt-3'>
                Address: D-14, Prashant Vihar ,Delhi 110085
              </p>
            </div>

            <div className='mt-5'>
              <div className='flex flex-row gap-4'>
                <div>
                  <Phone className='inline-block ml-2 bg-darkpink text-white p-1  rounded-md  h-8 w-8' />
                </div>
                <h2 className='text-2xl'>Contact Details</h2>
              </div>
              <div className='mt-3'>
                <Image
                  src={'/images/footer-border.png'}
                  alt='border'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-auto'
                />
              </div>
              <p className='text-lg text-paragraphColor mt-3'>
                +91- 9319314025
              </p>
              <p className='text-lg text-paragraphColor mt-3'>011-61348464 </p>
            </div>
            <div className='mt-5'>
              <div className='flex flex-row gap-4'>
                <div>
                  <Mail className='inline-block ml-2 bg-darkpink text-white p-1  rounded-md  h-8 w-8' />
                </div>
                <h2 className='text-2xl'>Emails</h2>
              </div>
              <div className='mt-3'>
                <Image
                  src={'/images/footer-border.png'}
                  alt='border'
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-auto'
                />
              </div>
              <p className='text-lg text-paragraphColor mt-3'>
                info@avivaesthetics.in
              </p>
            </div>
          </div>
        </div>

        {/* map */}

        <div className='mt-10'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13996.863109860507!2d77.1381085!3d28.7130968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01147c4f3215%3A0x493260ff1f61d740!2sAVIV%20AESTHETICS!5e0!3m2!1sen!2sin!4v1728301937970!5m2!1sen!2sin'
            width={'100%'}
            height={'600px'}
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </>
  );
}
