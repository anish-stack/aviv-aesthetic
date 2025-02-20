'use client';

// import { Edit, MoreHorizontal, Trash } from 'lucide-react';
// import { ServiceColumn } from './column';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';
// import { AlertModal } from '@/components/modals/alert-modal';
// import { deleteService } from '@/actions/service';

// interface CellActionProps {
//   data: ServiceColumn;
// }

// export const CellAction: React.FC<CellActionProps> = ({ data }) => {
//   const router = useRouter();

//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const onConfirm = async () => {
//     try {
//       setLoading(true);
//       await deleteService(data.id);
//       toast.success('Field deleted.');
//       router.refresh();
//     } catch (error) {
//       toast.error(
//         'Make sure you removed all products using this category first.'
//       );
//     } finally {
//       setOpen(false);
//       setLoading(false);
//     }
//   };
//   return (
//     <>
//       <AlertModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onConfirm={onConfirm}
//         loading={loading}
//       />
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant='ghost' className='h-8 w-8 p-0'>
//             <span className='sr-only'>Open menu</span>
//             <MoreHorizontal className='h-4 w-4' />
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align='end'>
//           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//           <DropdownMenuItem
//             onClick={() => router.push(`/admin/service/${data.id}`)}
//           >
//             <Edit className='mr-2 h-4 w-4' /> Update
//           </DropdownMenuItem>

//           <DropdownMenuItem onClick={() => setOpen(true)}>
//             <Trash className='mr-2 h-4 w-4' /> Delete
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </>
//   );
// };
'use client';

import { CopyIcon, Edit, MoreHorizontal, Trash } from 'lucide-react';

import { ServiceColumn } from './column';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { AlertModal } from '@/components/modals/alert-modal';
import { deleteService } from '@/actions/service';

interface CellActionProps {
  data: ServiceColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    try {
      setLoading(true);
      await deleteService(data.id);
      toast.success('Field deleted.');
      router.refresh();
    } catch (error) {
      toast.error('Make sure you removed  all services');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };
  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='h-8 w-8 p-0'>
            <span className='sr-only'>Open menu</span>
            <MoreHorizontal className='h-4 w-4' />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/admin/service/${data.id}`)}
          >
            <Edit className='mr-2 h-4 w-4' /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/admin/service/${data.id}/duplicate`)}
          >
            <CopyIcon className='mr-2 h-4 w-4' /> Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className='mr-2 h-4 w-4' /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
