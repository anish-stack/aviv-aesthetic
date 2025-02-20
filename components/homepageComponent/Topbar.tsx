import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Topbar = () => {
  return (
    <div className='w-full bg-darkpink  grid grid-cols-2 container py-2'>
      <div></div>
      <div className='flex justify-between'>
        <Link href={'mailto:info@avivaesthetics.in'}>
          <div className='flex items-center gap-1'>
            <Mail className='text-white h-4 w-4' />
            <p className='text-white text-md'>info@avivaesthetics.in</p>
          </div>
        </Link>
        <Link href='tel:+91-9319314025'>
          <div className='flex items-center gap-1'>
            <Phone className='text-white h-4 w-4' />
            <p className='text-white text-md'>+91-9319314025</p>
          </div>
        </Link>
        <div className='flex gap-4 items-center'>
          <div>
            <Link href={'https://www.instagram.com/aviv_aesthetics/'}>
              <Image
                src={'/images/icons/Instagram.png'}
                alt='instagram'
                height={25}
                width={25}
              />
            </Link>
          </div>
          <Link href={'https://www.linkedin.com/in/aviv-aesthetics-6a0941322/'}>
            <div>
              <Image
                src={'/images/icons/Linkedin.png'}
                alt='facebook'
                height={20}
                width={20}
              />
            </div>
          </Link>
          <Link href={'https://www.youtube.com/@AvivAesthetics'}>
            <div>
              <Image
                src={'/images/icons/YouTube.png'}
                alt='youtube'
                height={25}
                width={25}
              />
            </div>
          </Link>
          <Link
            href={
              'https://www.facebook.com/share/UyqSyPbyVk7Sz37d/?mibextid=LQQJ4d'
            }
          >
            <div>
              <Image
                src={'/images/icons/Facebook.png'}
                alt='facebook'
                height={20}
                width={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
