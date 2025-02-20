import React, { Suspense } from 'react';
import * as qs from 'qs';
import { ServiceClient } from './components/client';
import { allService } from '@/actions/service';
const Service = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const queryString = qs.stringify(searchParams, {
    encodeValuesOnly: true,
  });
  const service = await allService(queryString);
  return (
    <Suspense>
      <div className='p-4'>
        <ServiceClient data={service} />
      </div>
    </Suspense>
  );
};

export default Service;
