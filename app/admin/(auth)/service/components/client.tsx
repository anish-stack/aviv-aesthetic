'use client';
// import { Button } from '@/components/ui/button';
// import { DataTable } from '@/components/ui/data-table';
// import React from 'react';
// import { columns } from './column';
// import { useRouter } from 'next/navigation';
// import { PaginationComponent } from '@/components/pagination';
// import { Heading } from '@/components/ui/heading';
// import { Plus } from 'lucide-react';
// import { Separator } from '@/components/ui/separator';

// export const ServiceClient = ({ data }: { data: any }) => {
//   const router = useRouter();

//   return (
//     <div>
//       <div className='flex items-center justify-between py-2'>
//         <Heading
//           title={`Services (${data?.total_services})`}
//           description='Manage Services'
//         />
//         <Button
//           className='bg-main_black text-black'
//           onClick={() => router.push('/admin/service/add')}
//         >
//           <Plus className='mr-2 h-4 w-4' />
//           Add New
//         </Button>
//       </div>
//       <Separator />

//       <DataTable columns={columns} data={data?.services} searchKey='name' />
//       <div className='flex justify-between items-center py-3'>
//         <div className='text-muted-foreground text-sm'>
//           Showing {data?.services?.length} of {data?.total_services}
//         </div>
//         <div className='flex justify-end '>
//           <PaginationComponent pages={data?.pages} page={data?.page} />
//         </div>
//       </div>
//     </div>
//   );
// };

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

export const ServiceClient = ({ data }: { data: any }) => {
  const router = useRouter();

  return (
    <div>
      <div className='flex items-center justify-between py-2'>
        <Heading
          title={`Collections (${data?.total_services})`}
          description='Manage all your collections'
        />
        <Button onClick={() => router.push('/admin/service/add')}>
          <Plus className='mr-2 h-4 w-4' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data?.services} searchKey='name' />
      <div className='flex justify-between items-center py-3'>
        <div className='text-muted-foreground text-sm'>
          Showing {data?.services?.length} of {data?.total_services}
        </div>
        <div className='flex justify-end '>
          <PaginationComponent pages={data.pages} page={data.page} />
        </div>
      </div>
    </div>
  );
};
