'use client';

import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
const Banner = () => {
  return (
    <>
      <div className='relative bg-black mt-14 lg:mt-36'>
        <div>
          <Image
            src={`/images/banner/hero_banner.png`}
            alt='banner-img'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
