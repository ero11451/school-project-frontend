import { Icategory } from "./Icategory";


export interface Ipost {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    id?: any;
    title?: string;
    content?: string;
    imgUrl?: string;
    videoUrl?: string;
    example?: string;
    code?: string;
    status: string;
    options?: Itest[] ;
    categoryId?: number;
    category?: Icategory;
    locationId?: number;
    question?:string;
    location?: LocationModel;
    summary?:string;
    createdBy:string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    teacher?:any
    // teacherId?: number;
    // teacher?: UserModel;

}

// interfaces.ts
export interface Itest {
    id?:number
    option ?:string
    isCorrect ?:boolean ,
    summary?:string,
    selected? :boolean
}

  
  export interface LocationModel {
    // Define the properties of LocationModel here
  }
  
  export interface UserModel {
    // Define the properties of UserModel here
  }
  
