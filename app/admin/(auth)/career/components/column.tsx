'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
export type CareerColumn = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  cv: string;
};

export const columns: ColumnDef<CareerColumn>[] = [
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
    header: 'name',
    enableHiding: false,
  },
  {
    accessorKey: 'phone',
    header: 'phone',
    enableHiding: false,
  },
  {
    accessorKey: 'email',
    header: 'email',
    enableHiding: false,
  },
  {
    accessorKey: 'position',
    header: 'position',
    enableHiding: false,
  },
  {
    accessorKey: 'cv',
    header: 'cv',
    enableHiding: false,
  },

  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
