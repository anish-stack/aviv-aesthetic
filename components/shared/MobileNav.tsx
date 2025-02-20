'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/constants';
import { CategoryAttrs } from '@/interfaces/CategoryInterface';
import ServiceAttrs from '@/interfaces/ServiceInterface';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = ({
  categories,
  services,
}: {
  categories: CategoryAttrs[];
  services: ServiceAttrs[];
}) => {
  const pathname = usePathname();

  return (
    <header className='header w-full z-20 fixed top-0  h-16  '>
      <Link href='/' className='flex items-center gap-2 md:py-2'>
        <Image src='/logo.png' alt='logo' width={80} height={10} />
      </Link>

      <nav className='flex gap-3 items-center '>
        <div className='flex justify-between flex-row'>
          <Sheet>
            <SheetTrigger>
              <Menu height={30} width={30} color='#000' />
            </SheetTrigger>

            <SheetContent className='sheet-content sm:w-64 p-0 bg-white '>
              <>
                <Image
                  className='w-[80px] h-[80px]'
                  src='/logo.png'
                  alt='logo'
                  width={0}
                  height={0}
                  sizes='100vw'
                />

                <ul className='header-nav_elements flex flex-col gap-4'>
                  <div className=' inline-block'>
                    <button className='outline-none focus:outline-none  px-2 py-1  rounded-sm  '>
                      <Link
                        href={'/'}
                        className='pr-5 flex-1 text-[16px] font-semibold text-black'
                      >
                        Home
                      </Link>
                    </button>
                  </div>
                  <div className=' inline-block'>
                    <button className='outline-none focus:outline-none  px-2 py-1  rounded-sm flex items-center '>
                      <Link
                        href={'/about'}
                        className='pr-5 flex-1 text-[16px] font-semibold text-black'
                      >
                        About
                      </Link>
                    </button>
                  </div>

                  <div className='inline-block group/2'>
                    <button className='outline-none focus:outline-none  px-2 py-1  rounded-sm flex items-center pr-1 flex-1 text-[18px] font-medium font-Jost text-black'>
                      Services
                      <svg
                        className='fill-black h-4 w-4 transform hover:-rotate-180
        transition duration-150 ease-in-out'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </button>
                    <ul
                      className={cn(
                        'bg-white border z-50 border-white shadow-md rounded-sm transform  absolute w-[200px] scale-0 group-hover/2:scale-100'
                      )}
                    >
                      {categories &&
                        categories.map((category: any, index: any) => {
                          return (
                            <li key={index} className='relative group '>
                              <button className='rounded-sm font-semibold text-[#0F0F0F] px-3  hover:bg-custom-homepage-pink hover:text-[#0F0F0F] py-3 cursor-pointer flex gap-3 items-center'>
                                {category.name}
                                <ChevronRight className='w-3 h-3' />
                              </button>

                              <ul
                                className={cn(
                                  'bg-white border z-50 border-white shadow-md rounded-sm transform  absolute w-[200px] top-5 ms-16 scale-0 group-hover:scale-100 h-48 overflow-scroll overflow-x-hidden '
                                )}
                              >
                                {services &&
                                  services.map(
                                    (item: ServiceAttrs, index: any) => {
                                      if (
                                        item.category.includes(category?._id)
                                      ) {
                                        return (
                                          <li key={index}>
                                            <Link
                                              href={`/service/${item.slug}`}
                                              className='rounded-sm font-semibold text-[#0F0F0F] px-3  hover:bg-custom-homepage-pink hover:text-[#0F0F0F] py-3 cursor-pointer flex gap-3 items-center capitalize'
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    }
                                  )}
                              </ul>
                            </li>
                          );
                        })}
                    </ul>
                  </div>

                  <div className=' inline-block'>
                    <button className='outline-none focus:outline-none  px-2 py-1  rounded-sm flex items-center '>
                      <Link
                        href={'/blogs'}
                        className='pr-5 flex-1 text-[18px] font-medium font-Jost text-black'
                      >
                        Blogs
                      </Link>
                    </button>
                  </div>
                  <div className=' inline-block'>
                    <button className='outline-none focus:outline-none  px-2 py-1  rounded-sm flex items-center '>
                      <Link
                        href={'/contact-us'}
                        className='flex-1 text-[18px] font-medium font-Jost text-black'
                      >
                        Contact
                      </Link>
                    </button>
                  </div>
                  <div className=' inline-block'>
                    <button className='outline-none focus:outline-none  px-2 py-1  rounded-sm flex items-center '>
                      <Link
                        href={'/career'}
                        className='pr-5 flex-1 text-[18px] font-medium font-Jost text-black'
                      >
                        Careers
                      </Link>
                    </button>
                  </div>
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default MobileNav;
