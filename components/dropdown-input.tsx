'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandInput } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ArrowUpDown, Check } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

interface DropdownInputProps {
  name: string;
  title?: string;
  form: any;
  value: any;
  options: { value: any; label: string }[];
  handleSearchChange: (value: any, name: string) => void;
  loading?: boolean;
  term?: string;
}

export function DropdownInputComponent({
  name,
  title,
  form,
  value,
  options,
  handleSearchChange,
  loading,
  term,
}: DropdownInputProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='w-full'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='w-full justify-between'
          >
            {value
              ? options.find((framework) => framework.value === value)?.label
              : `Select ${title}...`}
            <ArrowUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-full p-0'>
          <Command>
            <CommandInput
              onValueChange={(value) => handleSearchChange(value, name)}
              placeholder={`Search ${title}...`}
              className='h-9'
              value={term}
            />
            {loading ? (
              <div className='mb-4 mt-1 flex flex-col gap-2 w-full h-full'>
                <Skeleton className='h-6 mx-1 ' />
                <Skeleton className='h-6 mx-1 ' />
                {/* <Skeleton className='h-6 mx-1 ' />
                <Skeleton className='h-6 mx-1 ' /> */}
              </div>
            ) : (
              <div>
                {options.map((framework) => (
                  <div
                    key={framework.value}
                    className='flex justify-between p-2 mx-1 hover:bg-slate-100'
                    onClick={() => {
                      form.setValue(name, framework.value);
                      setOpen(false);
                    }}
                  >
                    <div className='text-sm'> {framework.label} </div>
                    <div>
                      <Check
                        className={cn(
                          'ml-auto h-4 w-4',
                          value === framework.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
