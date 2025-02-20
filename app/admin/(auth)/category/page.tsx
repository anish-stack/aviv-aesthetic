import React, { Suspense } from 'react';
import { CategoryClient } from './components/client';
import * as qs from 'qs';
import { getCategories } from '@/actions/category';
const Category = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const queryString = qs.stringify(searchParams, {
    encodeValuesOnly: true,
  });
  const category = await getCategories(queryString);

  return (
    <Suspense>
      <div className='p-4'>
        <CategoryClient data={category} />
      </div>
    </Suspense>
  );
};

export default Category;
