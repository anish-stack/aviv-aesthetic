import About from '@/components/homepageComponent/About';
import Whyus from '@/components/homepageComponent/Whyus';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aesthetic Physician | Enhance Natural Beauty | AVIV Aesthetics',
  description:
    'Enhance the natural beauty with AVIV Aesthetics by experiencing expert care by aesthetic physicians that help you look good.',
  metadataBase: new URL('https://avivaesthetics.in'),
  alternates: {
    canonical: '/about',
  },
};
const AboutUs = () => {
  return (
    <>
      <Header />

      <div className=' mt-10 lg:mt-24'>
        <About />
        <Whyus />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
