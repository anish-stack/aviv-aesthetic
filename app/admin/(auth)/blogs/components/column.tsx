'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Checkbox } from '@/components/ui/checkbox';
import moment from 'moment';
export type BlogColumn = {
  id: string;
  category_title: string;
  image: string;
  link: string;
  publish_date: Date;
};

export const columns: ColumnDef<BlogColumn>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
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
    accessorKey: 'publish_date',
    header: 'Publish Date',
    enableHiding: false,
    cell: ({ row }) => (
      <div>
        {row.original.publish_date &&
          moment(row.original.publish_date).format('DD-MM-YYYY')}
      </div>
    ),
  },

  {
    id: 'actions',
    header: 'Action',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
