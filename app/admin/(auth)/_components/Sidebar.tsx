'use client';
import {
  Book,
  BookCopyIcon,
  Box,
  CalendarHeartIcon,
  FileImage,
  Image,
  Mails,
  NewspaperIcon,
  Phone,
  StoreIcon,
  User,
} from 'lucide-react';

import React from 'react';
import Logo from '@/public/logo.png';

import { Item } from './item';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

function Sidebar() {
  const pathname = usePathname();
  const session = useSession();

  return (
    <div className='w-64 h-screen fixed top-0 bg-gray-50 dark:bg-slate-900  [&::-webkit-scrollbar]:hidden  left-0  overflow-scroll '>
      <div className=' h-full flex flex-col  border-r'>
        <div className=''>
          <img className='object-contain h-20 w-20 mx-auto' src={Logo.src} />
        </div>

        <div className='flex h-full flex-col w-full space-y-1.5 p-3'>
          <Item
            icon={StoreIcon}
            url='/admin/dashboard'
            active={pathname?.includes('dashboard') ? true : false}
            label='Dashboard'
          />
          <Item
            icon={Book}
            url='/admin/blogs'
            active={pathname?.includes('dashboard') ? true : false}
            label='Blogs'
          />
          <Item
            icon={Box}
            url='/admin/category'
            label='Categories'
            active={pathname?.includes('/category') ? true : false}
          />
          <Item
            icon={Book}
            url='/admin/service'
            active={pathname?.includes('/service') ? true : false}
            label='Service'
          />
          <Item
            icon={Phone}
            url='/admin/contact'
            active={pathname?.includes('/contact') ? true : false}
            label='Contact'
          />
          <Item
            icon={Book}
            url='/admin/career'
            active={pathname?.includes('/contact') ? true : false}
            label='Career'
          />

          {/* <Item
            icon={User}
            url='/admin/contacts'
            label='Contacts'
            active={pathname?.includes('/contacts') ? true : false}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
