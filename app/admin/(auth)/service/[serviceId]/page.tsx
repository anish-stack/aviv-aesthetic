import React from 'react';
import { Types } from 'mongoose';
import { getCategory } from '@/actions/category';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ServiceForm from './components/form';
import { singleService } from '@/actions/service';
const Service = async ({ params }: { params: { serviceId: string } }) => {
  const { serviceId } = params;
  let service;
  if (Types.ObjectId.isValid(serviceId)) {
    service = await singleService(serviceId);
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <ServiceForm
          edit={service ? true : false}
          initialData={service}
          open={true}
        />
      </div>
    </div>
  );
};

export default Service;
