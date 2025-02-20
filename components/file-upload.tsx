'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import axios from 'axios';

export const FileUpload = ({
  name,
  form,
  value,
  hide,
}: {
  name: string;
  form: any;
  value?: string;
  hide?: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const uploadImage = async (file: File | undefined) => {
    setLoading(true);
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('image', file, file.name);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // handle the error
      form.setValue(name, data);
      setLoading(false);
    } catch (e: any) {
      // Handle errors here
      // console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <div>
          <p>Uploading...</p>
        </div>
      ) : (
        <>
          {value ? (
            <div className='mb-4 flex items-center gap-4'>
              <div className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
                <div className='z-10 absolute top-2 right-2'>
                  <Button
                    type='button'
                    onClick={() => {
                      form.setValue(name, '');
                    }}
                    variant='destructive'
                    size='icon'
                  >
                    <Trash className='h-4 w-4' />
                  </Button>
                </div>
                {!hide ? (
                  <img
                    className='object-cover '
                    alt='Image'
                    src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${value}`}
                    width={200}
                    height={200}
                  />
                ) : (
                  <div>
                    <a
                      href={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${value}`}
                      target='_blank'
                    >
                      {' '}
                      View{' '}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Input
              type='file'
              name='file'
              onChange={(e) => uploadImage(e.target.files?.[0])}
            />
          )}
        </>
      )}
    </div>
  );
};
