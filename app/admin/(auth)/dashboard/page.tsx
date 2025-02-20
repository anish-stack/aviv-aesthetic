import { Book, Phone, User2 } from 'lucide-react';
import React from 'react';

import DashboardCard from './components/DashboardCard';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import axios from 'axios';

const Colors = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const session = await getServerSession(authOptions);

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/dashboard`,
    {
      headers: {
        Authorization: `Bearer `,
      },
    }
  );

  return (
    <>
      <div className='pl-8 pt-8'>
        <h2 className='text-2xl font-bold mb-2 text-main_black'>Dashboard</h2>
      </div>

      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 px-5 py-5'>
        <DashboardCard
          title={'Total Category'}
          count={data?.total_category}
          Icon={User2}
          url='/admin/category'
        />
        <DashboardCard
          title={'Total Blogs'}
          count={data?.total_blogs}
          Icon={User2}
          url='/users?exact[is_active]=true'
        />
        <DashboardCard
          title={'Total Service'}
          count={data?.total_service}
          Icon={User2}
          url='/admin/service'
        />
      </div>
    </>
  );
};

export default Colors;
