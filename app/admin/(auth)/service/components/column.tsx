'use client';

// import { ColumnDef } from '@tanstack/react-table';
// import { CellAction } from './cell-action';
// import { Checkbox } from '@/components/ui/checkbox';
// export type ServiceColumn = {
//   id: string;
//   name: string;
//   slug: string;

//   description: string;

//   image: string;

//   category: string[];
// };

// export const columns: ColumnDef<ServiceColumn>[] = [
//   {
//     id: 'select',
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && 'indeterminate')
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label='Select all'
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label='Select row'
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: 'name',
//     header: 'Name',
//   },

//   {
//     id: 'actions',
//     header: 'Action',
//     cell: ({ row }) => <CellAction data={row.original} />,
//   },
// ];

'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import moment from 'moment';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
export type ServiceColumn = {
  id: string;
  collection_name: string;
};

export const columns: ColumnDef<ServiceColumn>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },

  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
