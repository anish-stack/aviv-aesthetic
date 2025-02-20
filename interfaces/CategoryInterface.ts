import BlogAttrs from './BlogInterface';
import CommonInterface from './Commoninterface';

export interface CategoryAttrs {
  name: string;
  slug: string;
}

export interface CategoryFinalInterface
  extends CategoryAttrs,
    CommonInterface {}
export interface BlogFinalInterface extends BlogAttrs, CommonInterface {}
