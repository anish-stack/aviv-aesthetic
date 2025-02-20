import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
import { getCategories } from '@/actions/category';
import { getAllBlogsByCategory } from '@/actions/blog';
import { allService } from '@/actions/service';
import { PhoneCallIcon } from 'lucide-react';

export default async function Footer() {
  const categories = await getCategories();
  const services = await allService();
  return (
    <footer className='  pt-14 pb-10 '>
      <div className='bg-pinkColor lg:px-96 px-10 text-center py-10 flex flex-col justify-center items-center'>
        <p className='text-lg font-semibold'>
          Stay Updated with the Latest Offers and News – Follow Us on Instagram!
        </p>
        {/* <div className='mt-5 relative '>
          <Input
            type='email'
            placeholder='Enter Your Email'
            className='rounded-full px-6'
          />
          <Button
            variant={'default'}
            className='p-5 rounded-full absolute right-0 top-0 h-12 rounded-s-none px-10'
          >
            Subscribe
          </Button>
        </div> */}
        <Link href={'https://www.instagram.com/aviv_aesthetics/'}>
          <Image
            src={'/images/icons/Instagram.png'}
            alt='insta'
            height={0}
            width={0}
            sizes='100vw'
            className='h-[70px] w-auto'
          />
        </Link>
      </div>
      <div className='lg:container px-10 mt-10'>
        <div className='grid lg:grid-cols-5 grid-cols-1 lg:gap-14 gap-5'>
          <div>
            <h5 className='text-2xl'>Quick Links</h5>
            <div className='flex flex-col gap-5 mt-5'>
              <Link
                href={'/about'}
                className='capitalize text-lg font-Jost font-medium'
              >
                About
              </Link>
              <Link
                href={'/media'}
                className='capitalize text-lg font-Jost font-medium'
              >
                Media
              </Link>
              <Link
                href={'/blogs'}
                className='capitalize text-lg font-Jost font-medium'
              >
                Blogs
              </Link>

              <Link
                href={'/contact-us'}
                className='capitalize text-lg font-Jost font-medium'
              >
                Contact
              </Link>
              <Link
                href={'/career'}
                className='capitalize text-lg font-Jost font-medium'
              >
                Carrers
              </Link>
            </div>
          </div>

          {categories.categories &&
            categories.categories.map((category: any, index: any) => {
              return (
                <div key={index} className=' flex flex-col gap-5 mt-5 lg:mt-0'>
                  <h5 className='text-2xl'>{category.name}</h5>

                  {services.services &&
                    services.services
                      .filter((item: any) =>
                        item.category.includes(category?._id)
                      )
                      .map((item: any, index: any) => {
                        if (index < 6) {
                          return (
                            <div key={index}>
                              <Link
                                href={`/service/${item.slug}`}
                                className='capitalize text-lg font-Jost font-medium '
                              >
                                {item.name}
                              </Link>
                            </div>
                          );
                        }
                      })}
                </div>
              );
            })}
        </div>

        <div className='mt-10'>
          <Image
            src={'/images/footer-border.png'}
            alt='border'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto'
          />
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <div className='flex flex-row gap-5 items-center mt-5'>
            <Image
              src={'/logo.png'}
              alt='logo'
              width={0}
              height={0}
              sizes='100vw'
              className='lg:h-[120px] w-auto h-[100px] lg:block hidden '
            />
            <div>
              <h4 className='text-2xl'>Aviv Aesthetics</h4>
              <p className='text-lg text-paragraphColor w-[250px] mt-2'>
                At Aviv Aesthetics, our brand philosophy is rooted in
                celebrating and enhancing natural beauty through a blend of
                advanced dermatology and dental care.
              </p>
            </div>
          </div>
          <div className='mt-16 lg:ms-48 flex flex-col'>
            <div className=' flex flex-row '>
              <h5 className='text-2xl'>Follow Us :</h5>
              <div className='flex flex-row gap-6 items-center '>
                <Link href={'https://www.instagram.com/aviv_aesthetics/'}>
                  <Image
                    src={'/images/icons/Instagram.png'}
                    alt='instagarm'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='h-[35px] w-auto'
                  />
                </Link>
                <Link
                  href={
                    'https://www.linkedin.com/in/aviv-aesthetics-6a0941322/'
                  }
                >
                  <Image
                    src={'/images/icons/Linkedin.png'}
                    alt='youtube'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='h-[28px] w-auto'
                  />
                </Link>
                <Link href={'https://www.youtube.com/@AvivAesthetics'}>
                  <Image
                    src={'/images/icons/YouTube.png'}
                    alt='youtube'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='h-[35px] w-auto'
                  />
                </Link>

                <Link
                  href={
                    'https://www.facebook.com/share/UyqSyPbyVk7Sz37d/?mibextid=LQQJ4d'
                  }
                >
                  <Image
                    src={'/images/icons/Facebook.png'}
                    alt='instagarm'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='h-[28px] w-auto'
                  />
                </Link>
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <Link
                href={'/privacy-policy'}
                className='capitalize text-lg font-Jost font-medium'
              >
                Privacy policy
              </Link>
              <Link
                href={'/terms-and-conditions'}
                className='capitalize text-lg font-Jost font-medium'
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-4 text-center '>
          <p className='text-lg font-normal'>
            Copyright © 2024 - Aviv Aesthetics All Rights Reserved
          </p>
        </div>
        <div className='fixed bottom-14 right-10 '>
          <a href='https://wa.me/9319314025'>
            <Image
              src={'/images/icons/Whatsapp.png'}
              alt='whatsapp'
              height={0}
              width={0}
              sizes='100vw'
              className='h-12 w-12 '
            />
          </a>
        </div>
        <div className='fixed bottom-14 left-10 '>
          <a href='tel:+91-9319314025'>
            <div className='flex flex-row gap-2 items-center bg-pinkColor p-2 rounded-md shadow-lg'>
              <PhoneCallIcon className='h-8 w-8 text-darkpink' />
              <p className='text-darkpink text-xl'>Call Now</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
