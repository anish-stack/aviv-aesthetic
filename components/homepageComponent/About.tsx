'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
const About = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className='lg:container px-10 grid lg:grid-cols-2 grid-cols-1  pt-16 pb-16 lg:gap-10 gap-5 '>
        <div>
          <h1 className='text-4xl'>The Aviv Aesthetics </h1>
          <p className='mt-3 text-lg'>
            Aviv Aesthetics, located in Prashant Vihar, New Delhi, stands as a
            premier destination for comprehensive dermatology and dental care.{' '}
            <span className='font-semibold'>
              Led by the esteemed Dr. Shristi, an expert Aesthetic Physician,
              and Dr. Sanjeev, MBBS MD,{' '}
            </span>
            our clinic embodies a commitment to enhancing natural beauty through
            a holistic approach.
          </p>
          <p className='mt-3 text-lg'>
            We pride ourselves on integrating advanced technology with
            personalized care to offer a broad spectrum of treatments. Our
            services span from cutting-edge dermatological procedures, including
            skin and hair rejuvenation, to state-of-the-art dental care, all
            designed to cater to your unique needs.
          </p>
          <p className='mt-3 text-lg'>
            Aviv Aesthetics is the best Skin Aesthetic Clinic in Delhi, we have
            trained dermatologists who analyze your skin and then recommend any
            treatment according to your skin needs, at aviv we provide safe,
            effective, and non-invasive treatment to enhance overall wellness to
            achieve clearer and healthier skin. Our team of highly skilled
            professionals is dedicated to delivering results that not only
            enhance facial features and rejuvenate the skin but also promote
            overall wellness.
          </p>
          <p className='mt-3 text-lg'>
            Our clinic’s serene environment, coupled with the latest
            technological advancements, provides a refined and luxurious
            experience. We are committed to guiding you through a transformative
            journey that celebrates your natural beauty and leaves you feeling
            confident and revitalized. To maintain skin rejuvenation, finding
            the right dermatology center is very important. If you are looking
            for a Skin Clinic in Rohini, Aviv Aesthetics offers a wide range of
            skin treatment from laser hair reduction to fillers. Our services
            are US FDA approved. Aviv Aesthetics is here to help you achieve a
            radiant and youthful look that reflects your inner vibrancy,
            blending sophistication with exceptional care.
          </p>
        </div>
        <div className='lg:mt-10 mt-0 lg:ms-24 ms-0 '>
          <Image
            src={'/logo.png'}
            alt='logo-img'
            height={0}
            width={0}
            sizes='100vw'
            className='h-[400px] w-auto '
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
