import React, { Suspense } from 'react';

import * as qs from 'qs';

import { BlogClient } from './components/client';
import { getBlogs } from '@/actions/blog';
const Blog = async ({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined | URLSearchParams;
  };
}) => {
  const queryString = qs.stringify(searchParams, {
    encodeValuesOnly: true,
  });
  const blog = await getBlogs(queryString);

  return (
    <Suspense>
      <div className='p-4'>
        <BlogClient data={blog} />
      </div>
    </Suspense>
  );
};

export default Blog;
