import Image from 'next/image';
import React from 'react';

const Doctors = () => {
  return (
    <>
      <div className='lg:container px-10 pt-14 pb-14 bg-extraColor'>
        <h3 className='text-black text-4xl text-center'>Our Team</h3>
        <div className='grid lg:grid-cols-2  grid-cols-1 lg:gap-20 gap-5 mt-16'>
          <div>
            <h2 className='text-3xl '>Dr. Sanjeev</h2>
            <h2 className='text-2xl mt-2'> MBBS & MD</h2>
            <p className='mt-3 text-lg'>
              Dr. Sanjeev is a highly experienced medical professional with a
              strong foundation in both academic and clinical practice. He
              completed his MBBS from JJM Medical College in 2007 and pursued
              his MD, which he successfully obtained in 2011 from a prestigious
              institution in Pune.
            </p>
            <p className='mt-3 text-lg'>
              Dr. Sanjeev has a rich background in medical practice, starting
              with a year of post-MBBS experience at Bhagwan Mahavir Hospital in
              Pitampura. He further honed his skills with a year-long residency
              during his MD at GTB Hospital in Delhi, followed by two years of
              post-MD experience at the renowned Maulana Azad Medical College.
            </p>
            <p className='mt-3 text-lg'>
              Currently, Dr. Sanjeev serves as a senior consultant in private
              practice, bringing his extensive knowledge and dedication to
              patient care to the forefront. With years of hands-on experience
              and a commitment to providing the highest standard of care, Dr.
              Sanjeev is a trusted and respected figure in the medical
              community.
            </p>
          </div>
          <div>
            <Image
              src={'/images/dr-sanjeev.png'}
              alt='doctor-img'
              height={0}
              width={0}
              sizes='100vw'
              className='h-auto w-auto rounded-md'
            />
          </div>
        </div>
        <div className='grid lg:grid-cols-2  grid-cols-1 lg:gap-20 gap-5 mt-20'>
          <div>
            <Image
              src={'/images/dr-shrishti.png'}
              alt='doctor-img'
              height={0}
              width={0}
              sizes='100vw'
              className='h- w-auto rounded-md '
            />
          </div>
          <div>
            <h2 className='text-3xl'>Dr. Shrishti</h2>
            <h2 className='text-2xl mt-2'> Aesthetic Physician</h2>

            <p className='mt-3 text-lg'>
              Dr. Shrishti, a dedicated Aesthetic Physician, is the visionary
              behind Aviv Aesthetics, where she has brought her concept of a
              comprehensive wellness hub to life. Her goal is to offer a
              complete makeover experience in one location, combining top-tier
              medical care with a holistic approach to wellness. At Aviv
              Aesthetics, she and her team are committed to creating an
              atmosphere of total wellness and positive vibes.
            </p>
            <p className='mt-3 text-lg'>
              Dr. Shrishti&apos;s academic journey includes a BDS from SGT
              Medical College, Gurugram, affiliated with PGMS, Rohtak (2014).
              She further specialized with a Fellowship in Medical Cosmetology
              from a renowned institute of laser and aesthetics medicine, and
              holds a certification in Cosmetology from the esteemed institute.
              Since 2015, Dr. Shrishti has been leading her own practice,
              bringing her expertise and passion for aesthetic medicine to Aviv
              Aesthetics, where she continues to transform lives with her
              innovative approach to beauty and wellness.
            </p>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 bg-extraColor px-10 pb-14'>
        <div className='bg-white rounded-md p-4 shadow-lg'>
          <div>
            <Image
              src={'/images/doc.jpg'}
              alt='doctor-img'
              height={0}
              width={0}
              sizes='100vw'
              className='h-auto w-full rounded-md '
            />
          </div>
          <div className='mt-2'>
            <h2 className='text-xl font-semibold'>Dr. Sachin Rajpal</h2>
            <h2 className='text-lg mt-2'>
              MBBS, MS, MCH (Plastic Surgery), FIAGES Senior Consultant Plastic
              &amp; Cosmetic Surgery
            </h2>
          </div>
          <p className='mt-2 '>
            Dr. Sachin Rajpal is a Senior Consultant in Plastic &amp; Cosmetic
            Surgery with 14 years of experience. He specializes in
            reconstructive and cosmetic procedures aimed at improving quality of
            life and patient satisfaction. Dr. Rajpal is committed to excellence
            and patient-centered care.
          </p>
        </div>
        <div className='bg-white rounded-md p-4 shadow-lg'>
          <div>
            <Image
              src={'/images/doc.jpg'}
              alt='doctor-img'
              height={0}
              width={0}
              sizes='100vw'
              className='h-auto w-full rounded-md '
            />
          </div>
          <div className='mt-2'>
            <h2 className='text-xl font-semibold'>Dr. Yashdeep Solanki</h2>
            <h2 className='text-lg mt-2'>MBBS, MD (Dermatologist)</h2>
          </div>
          <p className='mt-2'>
            Dr. Yashdeep Solanki is a skilled dermatologist specializing in
            skin, hair, and nail conditions. Known for his compassionate
            approach, he uses the latest advancements to provide personalized
            care, addressing both common and complex issues to help patients
            achieve healthier skin and enhanced well-being.
          </p>
        </div>
        <div className='bg-white rounded-md p-4 shadow-lg'>
          <div>
            <Image
              src={'/images/doc.jpg'}
              alt='doctor-img'
              height={0}
              width={0}
              sizes='100vw'
              className='h-auto w-full rounded-md '
            />
          </div>
          <div className='mt-2'>
            <h2 className='text-xl font-semibold'>Dr. Anjali</h2>
            <h2 className='text-lg mt-2'>Dental Surgeon</h2>
          </div>
          <p className='mt-2 '>
            Dr. Anjali is a skilled Dental Surgeon specializing in preventive,
            restorative, and cosmetic dentistry. Dedicated to high-quality,
            personalized care, she stays updated on the latest dental
            technologies, ensuring exceptional results for both routine checkups
            and complex procedures..
          </p>
        </div>
      </div>
    </>
  );
};

export default Doctors;
