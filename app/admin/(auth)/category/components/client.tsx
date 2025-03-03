'use client';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import React from 'react';
import { columns } from './column';
import { useRouter } from 'next/navigation';
import { PaginationComponent } from '@/components/pagination';
import { Heading } from '@/components/ui/heading';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const CategoryClient = ({ data }: { data: any }) => {
  const router = useRouter();
  return (
    <div>
      <div className='flex items-center justify-between py-2'>
        <Heading
          title={`Categories (${data?.total_categories})`}
          description='Manage category for you products'
        />
        <Button
          className='bg-main_black text-black'
          onClick={() => router.push('/admin/category/add')}
        >
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />

      <DataTable columns={columns} data={data?.categories} searchKey='name' />
      <div className='flex justify-between items-center py-3'>
        <div className='text-muted-foreground text-sm'>
          Showing {data?.categories?.length} of {data?.total_categories}
        </div>
        <div className='flex justify-end '>
          <PaginationComponent pages={data?.pages} page={data?.page} />
        </div>
      </div>
    </div>
  );
};
