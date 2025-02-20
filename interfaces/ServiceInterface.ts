import CommonInterface from './Commoninterface';

export default interface ServiceAttrs {
  name: string;
  slug: string;

  description: string;

  image: string;

  category: string[];
  faq: string[];
}

export interface ServiceFinalInterface extends ServiceAttrs, CommonInterface {}
