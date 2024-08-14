/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Category {
    id: number | null;
    category: string;
  }
  
 export interface Params {
    categoryId: number | string | null;
    page?:number;
    
  }
  
export  interface Props {
    categories: Category[];
    setParams: any;
    params: Params;
  }