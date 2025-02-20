import { serviceBySlug } from '@/actions/service';
import Offer from '@/components/homepageComponent/Offer';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { URL } from '@/lib/constant';
import Image from 'next/image';
import React from 'react';
import Faq from './_components/Faq';

const Service = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const service = await serviceBySlug(slug);
  return (
    <div>
      <Header />
      <div className='lg:container px-10  mt-20 lg:mt-36 relative'>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 '>
          <div>
            <h1 className='text-4xl capitalize'>{service.name}</h1>
            <p
              className='text-paragraphColor text-lg mt-3'
              dangerouslySetInnerHTML={{ __html: service?.description }}
            ></p>
          </div>
          <div className='lg:mt-10 mt-0'>
            <Image
              src={`${URL}${service?.image}`}
              alt={service.name}
              height={0}
              width={0}
              sizes='100vw'
              className='w-full h-auto sticky top-28 rounded-md'
            />
          </div>
        </div>
      </div>
      <Faq service={service} />
      <Offer />
      <Footer />
    </div>
  );
};

export default Service;
