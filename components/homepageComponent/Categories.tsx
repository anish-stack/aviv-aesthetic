import Image from 'next/image';
import React from 'react';

const Categories = () => {
  return (
    <div className='lg:container px-10 grid lg:grid-cols-2 grid-cols-1   pb-16 '>
      <div className='relative '>
        <Image
          src={'/images/category/Body.png'}
          alt='body'
          height={0}
          width={0}
          sizes='100vw'
          className='h-full w-full brightness-50'
        ></Image>
        <h4 className='absolute bottom-3 text-white ms-10 text-2xl'>Body</h4>
      </div>
      <div className='relative '>
        <Image
          src={'/images/category/Hair.png'}
          alt='hair'
          height={0}
          width={0}
          sizes='100vw'
          className='h-full w-full  brightness-50'
        ></Image>
        <h4 className='absolute bottom-3 text-white ms-10 text-2xl'>Hair</h4>
      </div>
      <div className='relative '>
        <Image
          src={'/images/category/Skin.png'}
          alt='skin'
          height={0}
          width={0}
          sizes='100vw'
          className='h-full w-full  brightness-50'
        ></Image>
        <h4 className='absolute bottom-3 text-white ms-10 text-2xl'>Skin</h4>
      </div>
      <div className='relative '>
        <Image
          src={'/images/category/Dental.png'}
          alt='dental'
          height={0}
          width={0}
          sizes='100vw'
          className='h-full w-full  brightness-50'
        ></Image>
        <h4 className='absolute bottom-3 text-white ms-10 text-2xl'>Dental</h4>
      </div>
    </div>
  );
};

export default Categories;
