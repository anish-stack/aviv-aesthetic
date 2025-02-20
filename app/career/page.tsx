import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React from 'react';
import { CareerForm } from './_components/CareerForm';

const Carrer = () => {
  return (
    <div>
      <Header />

      <div className=' lg:container px-10 lg:pt-32 pt-14'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-16 '>
          <CareerForm />
          <div className=''>
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
      </div>

      <Footer />
    </div>
  );
};

export default Carrer;
