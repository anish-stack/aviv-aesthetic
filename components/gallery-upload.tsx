'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import Image from 'next/image';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import axios from 'axios';

export const GalleryUpload = ({
  name,
  form,
  value,
}: {
  name: string;
  form: any;
  value?: string[];
}) => {
  const [loading, setLoading] = useState(false);
  const uploadImage = async (files: FileList | null) => {
    setLoading(true);
    if (!files) return;

    try {
      const formData = new FormData();
      Array.from(files).forEach((file, index) => {
        formData.append('gallery', file, file.name);
      });
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload/gallery`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      // handle the error

      form.setValue(
        name,
        value && value.length > 0 ? [...value, ...data] : data
      );
      setLoading(false);
    } catch (e: any) {
      // Handle errors here
      // console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const onRemove = (index: number) => {
    const newValue = value?.filter((_, i) => i !== index);
    form.setValue(name, newValue);
  };

  return (
    <div className="border w-full p-4">
      {loading ? (
        <div className="mb-4 flex gap-4 w-full h-full">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        </div>
      ) : (
        <>
          {value && value.length > 0 ? (
            <div>
              <div className="mb-4 flex gap-4 w-full h-full  flex-wrap ">
                {value.map((url, index) => (
                  <div
                    key={index}
                    className="relative w-[150px] h-[150px] rounded-md overflow-hidden"
                  >
                    <div className="z-10 absolute top-2 right-2">
                      <Button
                        type="button"
                        onClick={() => {
                          onRemove(index);
                        }}
                        variant="destructive"
                        size="icon"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <Image
                      fill
                      className="object-cover "
                      priority={true}
                      alt="Image"
                      src={`${process.env.NEXT_PUBLIC_UPLOAD_URL}${url}`}
                      loader={({ src }) => src}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label> Add more files </label>
                <Input
                  type="file"
                  name="file"
                  multiple={true}
                  onChange={(e) => uploadImage(e.target.files)}
                />
              </div>
            </div>
          ) : (
            <Input
              type="file"
              name="file"
              multiple={true}
              onChange={(e) => uploadImage(e.target.files)}
            />
          )}
        </>
      )}
    </div>
  );
};
