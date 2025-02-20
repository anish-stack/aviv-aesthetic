import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
const Faq = ({ service }: any) => {
  return (
    <div className='lg:container px-10 pt-14 pb-14 lg:px-44'>
      <div>
        <h3 className='text-black text-4xl text-center'>
          Frequently Asked Questions
        </h3>
      </div>
      <div className='mt-10'>
        <Accordion type='single' collapsible>
          {service &&
            service.faq.map((item: any, index: any) => {
              return (
                <>
                  <AccordionItem
                    key={item.id}
                    title={item.question}
                    value={`item.${index + 1}`}
                  >
                    <AccordionTrigger className=' font-semibold'>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className='font-normal text-paragraphColor'>
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                </>
              );
            })}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
