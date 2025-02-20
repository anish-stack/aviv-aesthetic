import React from 'react';

import * as qs from 'qs';

import { allCareer } from '@/actions/career';
import { CareerClient } from './components/client';
const Contact = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const queryString = qs.stringify(searchParams, {
    encodeValuesOnly: true,
  });
  const career = await allCareer(queryString);
  return (
    <div className='p-5'>
      <CareerClient data={career} />
    </div>
  );
};

export default Contact;
