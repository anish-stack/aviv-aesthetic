import BreadCrumb from '@/components/shared/BreadCrumb';
import Footer from '@/components/shared/Footer';
import MobileNav from '@/components/shared/MobileNav';
import Navbar from '@/components/shared/Navbar';

import React from 'react';

import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Header from '@/components/shared/Header';
const TermsAndConditions = async () => {
  return (
    <>
      <Header />
      <div className='lg:container px-10 lg:pt-32 pt-14'>
        <div className='container pt-10 pb-10'>
          <div className='grid gap-5 lg:max-w-3xl mx-auto grid-cols-1 items-center px-5'>
            <div>
              <h1 className='privacy-heading'>Terms of Service</h1>
              <p className='mb-2'>
                <span className='  font-semibold text-sm'>
                  Effective Date: September 3, 2024
                </span>
              </p>
              <p className='privacy-paragraph'>
                <span style={{ fontWeight: 400 }}>
                  These terms and conditions govern your use of the services
                  provided by Aviv Aesthetics. By booking an appointment,
                  receiving treatment, or using our services, you agree to
                  comply with these Terms.
                </span>
              </p>
              <h1 className='privacy-heading'>Changes to Terms</h1>
              <p className='privacy-paragraph'>
                We reserve the right to amend these Terms at any time. Any
                changes will be effective upon posting on our website or
                notification to you. Continued use of our services after changes
                constitutes your acceptance of the revised Terms.
              </p>
              <h1 className='privacy-heading'>Health Information</h1>
              <p className='privacy-paragraph'>
                You must provide accurate and complete medical information
                during your consultation and prior to receiving any treatment.
                It is your responsibility to inform us of any medical
                conditions, allergies, medications, or previous treatments that
                may affect your care. Failure to disclose relevant information
                may affect the outcome of your treatment.
              </p>
              <h1 className='privacy-heading'>Risks and Side Effects</h1>
              <p className='privacy-paragraph'>
                All aesthetic treatments carry potential risks and side effects,
                which will be explained to you during your consultation. By
                proceeding with treatment, you acknowledge and accept these
                risks. If you experience any complications following your
                treatment, please contact us immediately.
              </p>
              <h1 className='privacy-heading'>
                <strong>Aftercare</strong>
              </h1>
              <p className='privacy-paragraph'>
                Aftercare instructions will be provided following your
                treatment. It is essential to follow these instructions to
                achieve optimal results and minimize the risk of complications.
                We are not responsible for any adverse outcomes resulting from
                failure to follow aftercare guidelines.
              </p>
              <h1 className='privacy-heading'>
                <strong> Privacy</strong>
              </h1>
              <p className='privacy-paragraph'>
                Your privacy is important to us. Please refer to our [Privacy
                Policy] for information on how we collect, use, and protect your
                personal information.
              </p>
              <h1 className='privacy-heading'>Governing Law</h1>
              <p className='privacy-paragraph'>
                These Terms are governed by and construed in accordance with the
                laws of [your jurisdiction]. Any disputes arising out of or
                related to these Terms or our services shall be subject to the
                exclusive jurisdiction of the courts of [your jurisdiction].
              </p>
              <p className='privacy-paragraph'>
                For any questions or clarifications regarding these terms,
                please contact us at{' '}
                <Link
                  className=' inline text-purple-500'
                  href='mailto:info@avivaesthetics.in'
                >
                  info@avivaesthetics.in
                </Link>
              </p>

              <p className='privacy-paragraph'>
                Thank you for choosing Aviv Aesthetics. We strive to provide you
                with the best skincare solutions while upholding transparency
                and compliance with applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
