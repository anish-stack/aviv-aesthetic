import React from 'react';
import { Types } from 'mongoose';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import BlogForm from './components/form';
import { getBlog } from '@/actions/blog';
import moment from 'moment';
const Blog = async ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;
  let blog;
  if (Types.ObjectId.isValid(blogId)) {
    blog = await getBlog(blogId);
  }
  if (blog) {
    const mapData = blog.category.map((item: any) => item._id);
    blog.category = mapData;
  }
  if (blog) {
    const newBlogDate =
      blog?.publish_date && moment(blog?.publish_date).format('yyyy-MM-DD');
    blog.publish_date = newBlogDate;
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <BlogForm edit={blog ? true : false} initialData={blog} open={true} />
      </div>
    </div>
  );
};

export default Blog;
