'use client';
import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useFieldArray, useForm } from 'react-hook-form';
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

import Editor from '@/components/form/Editor';
import { FileUpload } from '@/components/file-upload';

import { useCategoryDropdown } from '@/hooks/category-hook';
import { DropdownInputComponent } from '@/components/dropdown-input';
import { addService, editService } from '@/actions/service';
import { Trash2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(3),
  slug: z.string(),
  description: z.string(),
  metaTitle: z.string().optional(), // Optional metaTitle
  metaDescription: z.string().optional(), // Optional metaDescription
  metaKeywords: z.string().optional(), // Optional metaKeywords
  publish_date: z.date().optional(),
  category: z.string().optional(),
  image: z.string().refine((value) => value.trim() !== '', {
    message: 'Category image is required is required',
  }),
  faq: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional(),
  ogTag: z.string().optional(),
  schemaOrg: z.string().optional(),
  canonicalTag: z.string().optional(),
});
type FieldFormValues = z.infer<typeof formSchema>;

const ServiceForm = ({
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
          description: '',
          image: '',
          category: '',
          metaTitle: '',
          metaDescription: '',
          metaKeywords: '',
          ogTag: '',
          schemaOrg: '',
          canonicalTag: '',
          faq: [
            {
              question: '',
            },
            {
              answer: '',
            },
          ],
        },
  });

  const title = initialData ? 'Edit service' : 'Create service';
  const description = initialData ? 'Edit a service.' : 'Add a new service';
  const onSubmit = async (data: FieldFormValues) => {
    try {
      setLoading(true);
      if (edit && initialData) {
        await editService(initialData._id, data);
        form.reset();
      } else {
        await addService(data);
      }
      router.refresh();
      const toastMessage = `Service ${data.name} created successfully.`;
      toast.success(toastMessage);
      router.push('/admin/service/');
    } catch (error: any) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  const action = initialData ? 'Save changes' : 'Create';
  const {
    getCategoryDropdown,
    categories,
    categories_loading,
    categories_searchTerm,
  } = useCategoryDropdown();

  const handleSearchChange = async (value: string, field: string) => {
    if (field === 'category') {
      await getCategoryDropdown(value);
    }
  };

  const {
    fields: faqFields,
    append: appendFaq,
    remove: removeFaq,
  } = useFieldArray({
    name: 'faq',
    control: form.control,
  });
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
              name='category'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <DropdownInputComponent
                      term={categories_searchTerm}
                      name='category'
                      title='category'
                      form={form}
                      value={form.getValues('category')}
                      options={categories}
                      loading={categories_loading}
                      handleSearchChange={handleSearchChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-1'>
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
          <div className='w-full'>
            <FormField
              control={form.control}
              name='image'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <FileUpload
                      name='image'
                      form={form}
                      value={form.getValues('image')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-1'>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel> description</FormLabel>
                  <FormControl>
                    {/* <Input
                      disabled={loading}
                      placeholder="content"
                      {...field}
                    /> */}
                    <Editor
                      description={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='border'>
            <div className='w-full bg-gray-50 py-2 px-2 rounded-md dark:bg-slate-900 '>
              <h3 className=' font-semibold text-sm'>Faq&apos;s</h3>
            </div>
            <div className='grid grid-cols-1 gap-5 w-full px-3 py-3'>
              <FormField
                control={form.control}
                name='faq'
                render={({ field }) => {
                  return (
                    <div className='grid grid-cols-1 gap-1 '>
                      <div>
                        {faqFields.map((field, index) => {
                          return (
                            <>
                              <div
                                key={field.id}
                                className='grid grid-cols-1 mb-4 gap-5 '
                              >
                                <FormField
                                  control={form.control}
                                  name={`faq.${index}.question`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          disabled={loading}
                                          placeholder='Question'
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={`faq.${index}.answer`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Answer</FormLabel>
                                      <FormControl>
                                        <Editor
                                          description={field.value}
                                          onChange={field.onChange}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <div>
                                  <Button
                                    type='button'
                                    onClick={() => removeFaq(index)}
                                    variant={'destructive'}
                                  >
                                    <Trash2 width={14} height={14} />
                                  </Button>
                                </div>
                              </div>
                            </>
                          );
                        })}
                        <div>
                          <Button
                            type='button'
                            onClick={() =>
                              appendFaq({ question: '', answer: '' })
                            }
                            className='mt-2'
                            variant={'default'}
                          >
                            Add Faq
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                }}
              />
            </div>
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

export default ServiceForm;
