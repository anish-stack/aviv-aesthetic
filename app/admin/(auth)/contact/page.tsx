import React from 'react';

import * as qs from 'qs';

import { allContacts } from '@/actions/contact';
import { ContactClient } from './components/client';
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
  const contact = await allContacts(queryString);
  return (
    <div className='p-5'>
      <ContactClient data={contact} />
    </div>
  );
};

export default Contact;
