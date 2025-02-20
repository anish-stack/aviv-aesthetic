import React from 'react';

import { getCategories } from '@/actions/category';
import Navbar from './Navbar';
import { allService } from '@/actions/service';
import Topbar from '../homepageComponent/Topbar';

const Header = async () => {
  const categories = await getCategories('');
  const services = await allService('');
  return (
    <div className='fixed top-0 w-full z-10'>
      <Topbar />

      <Navbar
        categories={categories?.categories}
        services={services?.services}
      />
    </div>
  );
};

export default Header;
