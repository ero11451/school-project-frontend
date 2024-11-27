/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Category {
    id: number | null;
    name: string;
    description:string
  }
  
 export interface Params {
    categoryId: number | string | null | undefined;
    page?:number;
    description? :string,
    name?:string, 
    id?:string
  }
  
export  interface Props {
    categories: Category[];
    setParams: any;
    params: Params;
  }