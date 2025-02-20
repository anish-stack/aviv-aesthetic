import type { Metadata } from 'next';
// react slick

import { serviceBySlug } from '@/actions/service';
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const { slug } = params;

  const service = await serviceBySlug(slug);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: service.canonicalTag,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return <div>{children}</div>;
}
