import type { Metadata } from 'next';
import './globals.css';
import Provider from '@/providers/session-provider';
import { Jost, Marcellus } from 'next/font/google';
import PopupBanner from '@/components/shared/PopupBanner';

const marcellus = Marcellus({
  subsets: ['latin'],

  variable: '--marcellus',
  weight: ['400'],
});
const jost = Jost({
  subsets: ['latin'],

  variable: '--jost',
  weight: ['400', '500', '600'],
});

export const revelidate = 0;
export const metadata: Metadata = {
  openGraph: {
    siteName: 'Aviv Aesthetics ',
    url: 'https://avivaesthetics.in/',
    title:
      'Aviv Aesthetics: Leading Skin Aesthetic Clinic for Advanced Skincare',
    type: 'website',
    description:
      'As a leading Cosmetic Dermatology Center, Aviv Aesthetics has been providing patients with superior treatments for advanced skincare.',
    images: {
      url: 'https://avivaesthetics.in/images/logo.png',
      width: '124',
      height: '75',
    },
  },
};

export const revalidate = 0;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aviv Aesthetics',
    url: 'https://avivaesthetics.in/',
    logo: 'https://avivaesthetics.in/_next/image?url=%2Flogo.png&w=1920&q=75',
    sameAs: 'https://www.instagram.com/aviv_aesthetics/',
  };
  return (
    <html lang='en'>
      <head>
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-4E7PYLT74F'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());

                      gtag('config', 'G-4E7PYLT74F');`,
          }}
        />
      </head>
      <body className={`${marcellus.variable} ${jost.variable} root-container`}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Provider>
          {children}
          <PopupBanner />
        </Provider>
      </body>
    </html>
  );
}
