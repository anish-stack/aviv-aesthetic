import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Split } from 'lucide-react';
import Link from 'next/link';
const DashboardCard = ({ title, count, Icon, url }: any) => {
  return (
    <Card x-chunk='dashboard-01-chunk-2'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <div className='text-2xl font-bold'>
          <Link href={url}>{count}</Link>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default DashboardCard;
