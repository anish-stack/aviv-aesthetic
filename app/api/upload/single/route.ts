import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.

  const date = Date.now();

  const path = `${
    process.env.NODE_ENV === 'production' ? '.' : './public'
  }/uploads/${date}-${file.name}`;
  await writeFile(path, buffer);

  return NextResponse.json({
    success: true,
    file: `/uploads/${date}-${file.name}`,
  });
}
