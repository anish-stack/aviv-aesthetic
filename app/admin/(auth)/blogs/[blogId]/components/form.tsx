'use client';
import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useController, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import slugify from 'react-slugify';

import React from 'react';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';

import Editor from '@/components/form/Editor';
import { FileUpload } from '@/components/file-upload';

import { useCategoryDropdown } from '@/hooks/category-hook';
import { DropdownInputComponent } from '@/components/dropdown-input';
import { addBlog, updateBlog } from '@/actions/blog';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { MultiSelect } from '@/components/ui/multi-select';

const formSchema = z.object({
  name: z.string().min(3),
  slug: z.string(),
  description: z.string().optional(),

  is_video: z.boolean().optional(),
  publish_date: z.date().optional(),
  category: z
    .array(z.string().min(1))
    .min(1)
    .nonempty('Please select at least one framework.'),

  video_link: z.string().optional(),
  metaTitle: z.string().optional(), // Optional metaTitle
  metaDescription: z.string().optional(), // Optional metaDescription
  metaKeywords: z.string().optional(), // Optional metaKeywords

  image: z.string().refine((value) => value.trim() !== '', {
    message: ' image is required is required',
  }),
  ogTag: z.string().optional(),
  schemaOrg: z.string().optional(),
  canonicalTag: z.string().optional(),
});
type FieldFormValues = z.infer<typeof formSchema>;

const BlogForm = ({
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
  const [tags, setTags] = React.useState<string[]>(
    initialData?.field_options ? initialData?.field_options : []
  );

  const form = useForm<FieldFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? initialData
      : {
          name: '',
          slug: '',
          description: '',
          image: '',

          category: [],

          metaTitle: '',
          metaDescription: '',
          video_link: '',
          metaKeywords: '',
          ogTag: '',
          schemaOrg: '',
          canonicalTag: '',
          is_video: false,
          publish_date: '',
        },
  });

  const title = initialData ? 'Edit blog' : 'Create blog';
  const description = initialData ? 'Edit a blog.' : 'Add a new blog';
  const onSubmit = async (data: FieldFormValues) => {
    try {
      setLoading(true);

      if (edit && initialData) {
        await updateBlog(initialData._id, data);
        form.reset();
      } else {
        await addBlog(data);
      }
      router.refresh();
      const toastMessage = `Blog ${data.name} created successfully.`;
      toast.success(toastMessage);
      router.push('/admin/blogs');
    } catch (error: any) {
      toast.error('Something went wrong.');
    }
    //  finally {
    //   setLoading(false);
    //   form.reset();
    // }
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
                    <MultiSelect
                      options={categories}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      placeholder='Select Category'
                      variant='inverted'
                      animation={2}
                      maxCount={3}
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
              <h3 className=' font-semibold text-sm'>SEO</h3>
            </div>
            <div className='grid grid-cols-2 gap-5 w-full px-3 py-3 mb-5'>
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
              {/* <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Start Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        max={new Date().toISOString().split('T')[0]}
                        disabled={loading}
                        placeholder="Post Date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name='publish_date'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Published Date</FormLabel>
                    <FormControl>
                      <div>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={'outline'}
                              className={cn(
                                'w-full justify-start text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              <CalendarIcon className='mr-2 h-4 w-4' />
                              {field.value ? (
                                format(field.value, 'PPP')
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0'>
                            <Calendar
                              mode='single'
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={form.control}
                name="publish_status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Published Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ACTIVE"> Active</SelectItem>
                          <SelectItem value="PENDING">Pending</SelectItem>
                          <SelectItem value="REJECTED">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>
            <div className='border'>
              <div className='w-full bg-gray-50 py-2 px-2 rounded-md dark:bg-slate-900 '>
                <h3 className=' font-semibold text-sm'>Is Video Available</h3>
              </div>
              <div className='grid grid-cols-1 gap-5 w-full px-3 py-3'>
                <FormField
                  control={form.control}
                  name='is_video'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border p-2 shadow'>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className='space-y-1 leading-none'>
                        <FormLabel>Is Video ? </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <div className='grid grid-cols-1 gap-5 w-full px-3 py-3'>
                <FormField
                  control={form.control}
                  name='video_link'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Video Link</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder='Video Link'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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

export default BlogForm;
