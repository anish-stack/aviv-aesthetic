import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Offer = () => {
  return (
    <div className='lg:container px-10 pt-14 '>
      <Link href={'/contact-us'}>
        <Image
          src={'/images/banner/offer_banner.png'}
          alt='offer-banner'
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-auto rounded-md shadow-lg'
        />
      </Link>
    </div>
  );
};

export default Offer;
