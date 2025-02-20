'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { z } from 'zod';

import { Controller, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import toast from 'react-hot-toast';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  phone: z.string().min(10).max(10, { message: 'Must be 10 Numbers' }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  message: z.string().optional(),
});
export const ContactForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      phone: '',

      email: '',
      message: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof schema>) => {
    setIsSubmitting(true);

    try {
      // Send email using API route
      const res = await fetch('https://api.avivaesthetics.in/api/contact/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setIsSuccess(true);
        toast.success(
          'Thank you for reaching out to us! We will respond to your inquiry within 24 hours.'
        );
        form.reset();

        console.log(res, 'res');
      } else {
        toast.error('Something Went Wrong!');
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
    console.log(values);
  };

  return (
    <div className='border border-black rounded-md p-5 w-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 mt-5'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=' rounded-md  bg-gray-50 text-black  border-gray-50   '
                    placeholder=' Enter Your Name *'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=' rounded-md  bg-gray-50 text-black  border-gray-50   '
                    placeholder=' Enter Your Email *'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=' rounded-md  bg-gray-50 text-black  border-gray-50   '
                    placeholder=' Phone *'
                    {...field}
                    type='number'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className=' rounded-md  bg-gray-50 text-black  border-gray-50   '
                    placeholder='Message'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className='text-center '>
            <Button
              disabled={isSubmitting}
              className=' rounded-full mx-auto text-white gradient-ps hover:gradient-sp font-semibold px-10 py-6 mb-3'
              type='submit'
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
            {/* {isSuccess && (
                    <p className=" text-[#282828] font-semibold">
                      Thank you for reaching out to us! We will respond to your
                      inquiry within 24 hours.
                    </p>
                  )} */}
          </div>
        </form>
      </Form>
    </div>
  );
};
