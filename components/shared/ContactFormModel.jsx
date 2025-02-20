'use client';
import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ContactForm } from '../../components/shared/ContactForm';
export const ContactFormModel = () => {
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
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};
