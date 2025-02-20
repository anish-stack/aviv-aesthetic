import fs from 'fs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const formDataEntryValues = Array.from(formData.values());
    let gallery_images = [];
    const date = Date.now();
    for (const formDataEntryValue of formDataEntryValues) {
      if (
        typeof formDataEntryValue === 'object' &&
        'arrayBuffer' in formDataEntryValue
      ) {
        const file = formDataEntryValue as unknown as File;
        const buffer = Buffer.from(await file.arrayBuffer());
        fs.writeFileSync(
          `${
            process.env.NODE_ENV === 'production' ? '' : '/public'
          }/uploads/${date}-${file.name}`,
          buffer
        );
        gallery_images.push(`/uploads/${date}-${file.name}`);
      }
    }
    return NextResponse.json({ success: true, gallery: gallery_images });
    
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}
