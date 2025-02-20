'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { z } from 'zod';

import { Controller, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '../ui/checkbox';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';
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
import Image from 'next/image';

const schema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  phone: z.string().min(10).max(10, { message: 'Must be 10 Numbers' }),
  age: z.string().nonempty({ message: 'Age must be required' }),
  gender: z.string().nonempty({ message: 'Gender must be required' }),
  date: z.string().nonempty({ message: 'Date must be required' }),
  slot: z.string().nonempty({ message: 'Slot must be required' }),
});
const ConsultantForm = ({ topic }) => {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      age: '',
      gender: '',
      skin: '',
      hair: '',
      others: '',
      picture: '',
      date: '',
      slot: '',
    },

    resolver: zodResolver(schema),
  });
  const onSubmit = () => router.push('/thankyoupage');
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {/* <Button variant='outline'>Edit Profile</Button> */}
          <p className='text-sm font-semibold text-purple-500'>{topic}</p>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[500px]'>
          <DialogHeader>
            <DialogTitle className='text-purple-500'>
              Tell Us About Yourself
            </DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription> */}
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-row justify-between gap-5'>
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
            </div>
            <div className='flex flex-row gap-5 mt-5 justify-between'>
              <Controller
                name='age'
                control={control}
                render={({ field }) => (
                  <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor='age'>Age</Label>

                    <Input {...field} placeholder='Age' />
                    {errors.age && (
                      <p className='text-destructive text-sm'>
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                name='gender'
                control={control}
                render={({ field }) => (
                  <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor='age'>Gender</Label>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='w-[300px]'>
                        <SelectValue placeholder='Gender' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Gender</SelectLabel>
                          <SelectItem value='Male'>Male</SelectItem>
                          <SelectItem value='Female'>Female</SelectItem>
                          <SelectItem value='Trans'>Trans</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.gender && (
                      <p className='text-destructive text-sm'>
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className='mt-5'>
              <h4 className='font-semibold text-purple-500'>
                Where we can help you?
              </h4>
              <div className='flex flex-row justify-between mt-3 '>
                <Controller
                  name='skin'
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='skin'
                          {...field}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor='skin'
                          className='text-sm font-medium text-purple-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          Skin
                        </label>
                        {errors.skin && (
                          <p className='text-destructive text-sm'>
                            {errors.skin.message}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                />
                <Controller
                  name='hair'
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='hair'
                          {...field}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor='hair'
                          className='text-sm font-medium text-purple-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          Hair
                        </label>
                        {errors.hair && (
                          <p className='text-destructive text-sm'>
                            {errors.hair.message}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                />
                <Controller
                  name='other'
                  control={control}
                  render={({ field }) => (
                    <>
                      <div className='flex items-center space-x-2 bg-slate-500'>
                        <Checkbox
                          id='other'
                          {...field}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor='other'
                          className='text-sm font-medium text-purple-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          Others
                        </label>
                      </div>
                    </>
                  )}
                />
              </div>
            </div>
            <div className='flex flex-row gap-5 mt-5 justify-between'>
              <Controller
                name='picture'
                control={control}
                render={({ field }) => (
                  <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor='picture'>Share Picture</Label>

                    <Input {...field} placeholder='Picture' type='file' />
                    {errors.picture && (
                      <p className='text-destructive text-sm'>
                        {errors.picture.message}
                      </p>
                    )}
                  </div>
                )}
              />
              <Controller
                name='date'
                control={control}
                render={({ field }) => (
                  <div className='flex flex-col gap-2 w-full'>
                    <Label htmlFor='date'>Select Preferred Date</Label>
                    <Input {...field} placeholder='Date' type='date' />
                    {errors.date && (
                      <p className='text-destructive text-sm'>
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
            <div className='mt-5'>
              <h4 className='font-semibold text-purple-500'>Available Slots</h4>
              <div className='flex flex-row gap-5  justify-between w-full'>
                <Controller
                  name='slot'
                  control={control}
                  render={({ field }) => (
                    <ToggleGroup
                      type='single'
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <ToggleGroupItem
                        value='10AM-12PM'
                        aria-label='Toggle bold'
                      >
                        <div className='flex flex-col items-center '>
                          <Image
                            src='/assets/images/dawn.png'
                            alt='morning'
                            width={50}
                            height={50}
                          />
                          <h4 className='mt-3 text-purple-500'>10 AM-12 PM</h4>
                        </div>
                      </ToggleGroupItem>
                      <ToggleGroupItem value='12PM-3PM'>
                        <div className='flex flex-col items-center '>
                          <Image
                            src='/assets/images/sun.png'
                            alt='morning'
                            width={50}
                            height={50}
                          />
                          <h4 className='mt-3 text-purple-500'>12 PM-3 PM</h4>
                        </div>
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value='3PM-7PM'
                        aria-label='Toggle underline'
                      >
                        <div className='flex flex-col items-center '>
                          <Image
                            src='/assets/images/crescent-moon.png'
                            alt='morning'
                            width={30}
                            height={30}
                          />
                          <h4 className='mt-4 text-purple-500'>3 PM-7 PM</h4>
                        </div>
                      </ToggleGroupItem>
                    </ToggleGroup>
                  )}
                />
                {errors.slot && (
                  <p className='text-destructive text-sm'>
                    {errors.slot.message}
                  </p>
                )}
              </div>
            </div>
            {/* <DevTool control={control} /> */}
            <DialogFooter>
              <Button type='submit' className='mt-10 bg-purple-500 text-white '>
                Book Now
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConsultantForm;
