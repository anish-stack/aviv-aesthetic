import BreadCrumb from '@/components/shared/BreadCrumb';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

const PrivacyPolicy = async () => {
  return (
    <>
      <Header />
      <div className='lg:container px-10 lg:pt-32 pt-14'>
        <div className='container pt-10 pb-10'>
          <div className='grid gap-5 lg:max-w-3xl mx-auto grid-cols-1 items-center px-5'>
            <div>
              <h1 className='privacy-heading'>Privacy Policy</h1>
              <p className='mb-2'>
                <span className='  font-semibold text-sm'>
                  Effective Date: September 3, 2024
                </span>
              </p>{' '}
              <p
                dangerouslySetInnerHTML={{
                  __html: ` At Aviv Aesthetics, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, and protect your information when you visit our clinic or use our services.`,
                }}
                className='privacy-paragraph'
              ></p>
              <h1 className='privacy-heading'> Information We Collect</h1>
              <p className='privacy-paragraph'>
                We may collect the following types of personal information:
                Personal Identification Information: Name, address, phone
                number, email address, date of birth, etc. Medical Information:
                Medical history, treatment plans, before-and-after photos, and
                other health-related information. Payment Information: Credit
                card details, billing address, and other payment-related
                information. Appointment Information: Details of your visits to
                the clinic, such as appointment dates, times, and treatment
                details.
              </p>
              <h1 className='privacy-heading'> How We Use Your Information</h1>
              <p className='privacy-paragraph'>
                We use your personal information for the following purposes:
                Provision of Services: To provide you with aesthetic treatments
                and related services. Communication: To send appointment
                reminders, follow-up communications, and respond to your
                inquiries. Billing and Payments: To process payments for our
                services. Legal Compliance: To comply with legal and regulatory
                requirements.
              </p>
              <h1 className='privacy-heading'>Sharing Your Information</h1>
              <p className='privacy-paragraph'>
                We do not share your personal information with third parties,
                except in the following circumstances: Service Providers: We may
                share your information with trusted third-party service
                providers who assist us in operating our clinic (e.g., payment
                processors, IT support). Legal Obligations: If required by law,
                we may disclose your information to comply with legal
                proceedings, court orders, or government requests. Medical
                Referrals: With your consent, we may share relevant medical
                information with other healthcare providers involved in your
                care.
              </p>
              <h1 className='privacy-heading'>
                Changes to This Privacy Policy
              </h1>
              <p className='privacy-paragraph'>
                We may update this privacy policy from time to time to reflect
                changes in our practices or legal requirements. Any updates will
                be posted on our website, and the effective date will be revised
                accordingly.
              </p>
              <h1 className='privacy-heading'>
                <strong>Contact Us</strong>
              </h1>
              <p className='privacy-paragraph'>
                If you have any questions or concerns about this privacy policy
                or your personal information, please contact us at:{''}
                <strong> info@avivaesthetics.in </strong>
                <span style={{ fontWeight: 400 }}>
                  or visit us during our business hours (10am-6pm, Mon-Fri).
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
