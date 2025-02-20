import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const Faq = () => {
  return (
    <div className='lg:container px-10 pt-14 pb-14 lg:px-44'>
      <div>
        <h3 className='text-black text-4xl text-center'>
          Frequently Asked Questions
        </h3>
      </div>
      <div className='mt-10'>
        <Accordion
          type='single'
          collapsible
          className='w-full flex flex-col gap-4'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger>
              Can laser treatment help with hair removal, pigmentation, or
              ingrown hair?
            </AccordionTrigger>
            <AccordionContent>
              Yes, laser treatment is effective for hair removal, reducing
              pigmentation, and treating ingrown hairs.{' '}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>How does laser treatment work?</AccordionTrigger>
            <AccordionContent>
              Laser treatment works by using concentrated light to target and
              destroy specific skin issues or hair follicles.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              What are the different treatment options for acne scars?
            </AccordionTrigger>
            <AccordionContent>
              Acne scars can be treated with options like laser resurfacing,
              microneedling, and chemical peels, medi facials.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>
              What causes skin pigmentation issues?
            </AccordionTrigger>
            <AccordionContent>
              Skin pigmentation issues are often caused by factors such as sun
              exposure, hormonal changes, and inflammation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>
              {' '}
              What treatments do you offer for pigmentation?
            </AccordionTrigger>
            <AccordionContent>
              Treatments for pigmentation include laser therapy, chemical peels,
              hydrafacial can cure pigmentation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger>
              {' '}
              What are the different options available for smile correction?
            </AccordionTrigger>
            <AccordionContent>
              Smile correction options include teeth whitening, veneers,
              bonding, and orthodontic treatments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
