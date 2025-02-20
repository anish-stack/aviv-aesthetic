import { Award } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Whyus = () => {
  return (
    <div className=' pt-14 pb-14 lg:container px-5'>
      <div className='bg-darkpink rounded-md p-7 px-10 shadow-md'>
        <div>
          <h3 className='text-white text-4xl text-center'>Why Us</h3>
        </div>
        {/* <div className='flex lg:flex-row flex-col  justify-between items-center mt-10 gap-10'> */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
          <div className='flex flex-col items-center'>
            <Image
              src={'/images/icons/US FDA Approved.png'}
              alt='why-us'
              height={0}
              width={0}
              sizes='100vw'
              className='h-[70px] w-auto'
            />
            <p className='text-2xl font-semibold text-white text-center mt-3'>
              US-FDA
              <span>
                <br />
                Approved Tech.
              </span>
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src={'/images/icons/Satisfied Clients.png'}
              alt='why-us'
              height={0}
              width={0}
              sizes='100vw'
              className='h-[70px] w-auto'
            />{' '}
            <p className='text-2xl font-semibold text-white text-center mt-3'>
              500+
              <span>
                <br />
                Satisfied Clients
              </span>
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src={'/images/icons/Tailored Solutions.png'}
              alt='why-us'
              height={0}
              width={0}
              sizes='100vw'
              className='h-[70px] w-auto'
            />
            <p className='text-2xl font-semibold text-white text-center mt-3'>
              Tailored
              <span>
                <br />
                Solutions
              </span>
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <Image
              src={'/images/icons/Pesonalised care.png'}
              alt='why-us'
              height={0}
              width={0}
              sizes='100vw'
              className='h-[70px] w-auto'
            />{' '}
            <p className='text-2xl font-semibold text-white text-center mt-3'>
              Personalized
              <span>
                <br />
                Care
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
