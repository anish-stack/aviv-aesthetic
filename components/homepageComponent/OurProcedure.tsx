import Image from 'next/image';
import React from 'react';

const data = [
  {
    id: 1,
    image: '/images/procedure/Personalized Consultation_.png',
    name: 'Personalized Consultation',
    description:
      'We begin with a detailed consultation to understand your unique needs and aesthetic goals. Our expert team takes the time to listen and assess your requirements, ensuring a tailored treatment plan that aligns with your vision.',
    step: '1',
  },
  {
    id: 2,
    image: '/images/procedure/Customized Treatment Plan.png',
    name: 'Customized Treatment Plan',
    description:
      " Based on your consultation, we create a personalized treatment plan designed to address your specific concerns. Whether's dermatological or dental care, our advanced techniques & technology are employed to achieve optimal results.",
    step: '2',
  },
  {
    id: 3,
    image: '/images/procedure/Follow-Up &amp_ Care_.png',
    name: 'Follow-Up & Care',
    description:
      ' After your treatment, we provide thorough follow-up care to monitor your progress &amp; ensure you’re fully satisfied with the results. Our commitment extends beyond the procedure, offering ongoing support & guidance for your continued well-being.',
    step: '3',
  },
];
const OurProcedure = () => {
  return (
    <div className='lg:container px-10 pt-14 pb-14 bg-extraColor'>
      <div>
        <h3 className='text-black text-4xl text-center'>
          Tailored Aesthetic Excellence: Our 3-Step Approach{' '}
        </h3>
        <p className='text-center lg:px-40 text-paragraphColor mt-3'>
          Experience a personalized journey at Aviv Aesthetics Clinic. From
          customized consultations to bespoke treatments and attentive follow-up
          care, we ensure your aesthetic goals are met with precision and care.
        </p>
      </div>
      <div className='flex justify-between lg:flex-row flex-col mt-10 gap-5'>
        {data &&
          data.map((item, index) => {
            return (
              <div className='bg-white shadow-xl rounded-md w-full' key={index}>
                <Image
                  src={item.image}
                  alt='procedure-img'
                  height={0}
                  width={0}
                  sizes='100vw'
                  className='w-full h-auto rounded-t-md'
                />
                <div className='p-3'>
                  <div className='flex flex-row justify-between'>
                    <p className='text-lg  font-medium'>{item.name}</p>
                    <p className='text-lg text-darkpink font-medium'>
                      Step:{item.step}
                    </p>
                  </div>
                  <div className='mt-2'>
                    <p className='text-paragraphColor'>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OurProcedure;
