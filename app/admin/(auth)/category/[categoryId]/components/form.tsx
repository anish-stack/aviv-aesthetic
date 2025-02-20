'use client';
import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';
import slugify from 'react-slugify';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import React from 'react';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { addCategory, updateCategory } from '@/actions/category';
import { GalleryUpload } from '@/components/gallery-upload';
import Editor from '@/components/form/Editor';
import { FileUpload } from '@/components/file-upload';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { useCategoryDropdown } from '@/hooks/category-hook';
import { DropdownInputComponent } from '@/components/dropdown-input';

const formSchema = z.object({
  name: z.string().min(3),
  slug: z.string(),

  metaTitle: z.string().optional(), // Optional metaTitle
  metaDescription: z.string().optional(), // Optional metaDescription
  metaKeywords: z.string().optional(), // Optional metaKeywords

  ogTag: z.string().optional(),
  schemaOrg: z.string().optional(),
  canonicalTag: z.string().optional(),
});
type FieldFormValues = z.infer<typeof formSchema>;

const CategoryForm = ({
  edit,

  initialData,
  field,

  id,
  open,
}: {
  edit: boolean;

  initialData?: any;

  field?: {
    name: string;
    value: string;
  };
  id?: string;

  open?: boolean;
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<FieldFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? initialData
      : {
          name: '',
          slug: '',

          metaTitle: '',
          metaDescription: '',
          metaKeywords: '',
          ogTag: '',
          schemaOrg: '',
          canonicalTag: '',
        },
  });

  const title = initialData ? 'Edit category' : 'Create category';
  const description = initialData ? 'Edit a category.' : 'Add a new category';
  const onSubmit = async (data: FieldFormValues) => {
    try {
      setLoading(true);
      if (edit && initialData) {
        await updateCategory(initialData._id, data);
        form.reset();
      } else {
        await addCategory(data);
      }
      router.refresh();
      const toastMessage = `Category ${data.name} created successfully.`;
      toast.success(toastMessage);
      router.push('/admin/category/');
    } catch (error: any) {
      toast.error('Something went wrong.');
    }
    // finally {
    //   setLoading(false);
    //   form.reset();
    // }
  };

  const action = initialData ? 'Save changes' : 'Create';

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading title={title} description={description} />
      </div>
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-full '
        >
          <div className='grid grid-cols-2 gap-5 w-full'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder='Name'
                      {...field}
                      onChange={(e) => {
                        form.setValue('name', e.target.value);
                        form.setValue('slug', slugify(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='slug'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder='/slug' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='border'>
            <div className='w-full bg-gray-50 py-2 px-2 rounded-md dark:bg-slate-900 '>
              <h3 className=' font-semibold text-sm'>SEO</h3>
            </div>
            <div className='grid grid-cols-2 gap-5 w-full px-3 py-3'>
              <FormField
                control={form.control}
                name='metaKeywords'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta keywords</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Meta keywords'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='metaTitle'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Meta title'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='metaDescription'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta description</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Describe the product'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='ogTag'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Og Tag</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Og Tag'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='schemaOrg'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Schema Org</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Schema Org'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='canonicalTag'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Canonical Tag</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Canonical Tag'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className=''>
            <Button type='submit' className='ml-auto bg-primary text-white'>
              {action}
            </Button>
          </div>
          <DevTool control={form.control} /> {/* set up the dev tool */}
        </form>
      </Form>
    </>
  );
};

export default CategoryForm;
