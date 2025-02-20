'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { z } from 'zod';

import { Controller, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Textarea } from '../ui/textarea';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  phone: z.string().min(10).max(10, { message: 'Must be 10 Numbers' }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  branch: z.string().nonempty({ message: 'Branch must be required' }),
  message: z.string().optional(),
});
export const ContactForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      branch: '',
      message: '',
    },

    resolver: zodResolver(schema),
  });
  const onSubmit = () => router.push('/thankyoupage');

  return (
    <div className='border border-purple-500 rounded-md p-5 w-full'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col  gap-5'>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor='name'>Name</Label>

                <Input {...field} placeholder='Name' />
                {errors.name && (
                  <p className='text-destructive text-sm'>
                    {errors.name.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor='email'>Email</Label>

                <Input {...field} placeholder='Email' type='email' />
                {errors.email && (
                  <p className='text-destructive text-sm'>
                    {errors.email.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor='phone'>Phone</Label>

                <Input {...field} placeholder='Phone' />
                {errors.phone && (
                  <p className='text-destructive text-sm'>
                    {errors.phone.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name='branch'
            control={control}
            render={({ field }) => (
              <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor='age'>Branch</Label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className='w-[300px]'>
                    <SelectValue placeholder='Branch' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Branch</SelectLabel>
                      <SelectItem value='New Delhi'>New Delhi</SelectItem>
                      <SelectItem value='Gurugram'>Gurugram</SelectItem>
                      <SelectItem value='Mumbai'>Mumbai</SelectItem>
                      <SelectItem value='Lucknow'>Lucknow</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.branch && (
                  <p className='text-destructive text-sm'>
                    {errors.branch.message}
                  </p>
                )}
              </div>
            )}
          />
          <Controller
            name='message'
            control={control}
            render={({ field }) => (
              <div className='flex flex-col gap-2 w-full'>
                <Label htmlFor='message'>Message</Label>
                <Textarea {...field} placeholder='Type your message here.' />
                {errors.message && (
                  <p className='text-destructive text-sm'>
                    {errors.message.message}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <DevTool control={control} />
        <div className='flex justify-center'>
          <Button type='submit' className='mt-10 bg-purple-500 text-white '>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
