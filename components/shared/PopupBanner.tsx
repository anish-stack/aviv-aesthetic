'use client';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import Image from 'next/image';
import Link from 'next/link';

export default function PopupBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className='flex items-center justify-center '>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='sm:max-w-[700px]'>
          <Link href={'/contact-us'}>
            <Image
              src={'/images/banner/popup-banner.png'}
              alt='popup-banner'
              height={0}
              width={0}
              sizes='100vw'
              className='w-full h-auto'
            />
          </Link>
        </DialogContent>
      </Dialog>
    </div>
  );
}
