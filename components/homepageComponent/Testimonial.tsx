'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const data = [
  {
    decription:
      'Aviv Aesthetics transformed my skin! Their expert treatments and personalized care made my skincare dreams a reality. I now feel confident and radiant every day. Highly recommended!',

    heading: 'Kavita Panchal, Delhi',
  },
  {
    decription:
      "My experience at Aviv Aesthetics has been amazing. Their professional team and cutting-edge treatments have given me the beautiful skin I always wanted. I'm thrilled with the results!",
    heading: 'Anamika, Delhi',
  },
  {
    decription:
      "Thanks to Aviv Aesthetics, my skin has never looked better. Their customized approach and top-notch services made a huge difference. I'm grateful for their dedication to achieving beautiful skin!",
    heading: 'Anirudh, Delhi',
  },
  {
    decription:
      'Aviv Aesthetics transformed my skin! Their expert treatments and personalized care made my skincare dreams a reality. I now feel confident and radiant every day. Highly recommended!',

    heading: 'Kavita Panchal, Delhi',
  },
  {
    decription:
      "My experience at Aviv Aesthetics has been amazing. Their professional team and cutting-edge treatments have given me the beautiful skin I always wanted. I'm thrilled with the results!",
    heading: 'Anamika, Delhi',
  },
  {
    decription:
      "Thanks to Aviv Aesthetics, my skin has never looked better. Their customized approach and top-notch services made a huge difference. I'm grateful for their dedication to achieving beautiful skin!",
    heading: 'Anirudh, Delhi',
  },
];
const Testimonial = () => {
  return (
    <div className=' bg-pinkColor pt-14 pb-14'>
      <div>
        <h3 className='text-black text-4xl text-center'>Testimonials</h3>
      </div>
      <div className='w-full mt-10 lg:px-20 px-10 '>
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {data &&
              data.map((item, index) => {
                return (
                  <CarouselItem className='lg:basis-1/3 basis' key={index}>
                    <div className='bg-white p-4 '>
                      <p className='text-lg '>{item.decription}</p>
                      <p className='text-xl font-semibold mt-3'>
                        {item.heading}
                      </p>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
