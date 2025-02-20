import React from 'react';
import { Types } from 'mongoose';
import CategoryForm from './components/form';
import { getCategory } from '@/actions/category';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { log } from 'console';
const Category = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = params;
  let category;
  if (Types.ObjectId.isValid(categoryId)) {
    category = await getCategory(categoryId);
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <CategoryForm
          edit={category ? true : false}
          initialData={category}
          open={true}
        />
      </div>
    </div>
  );
};

export default Category;
