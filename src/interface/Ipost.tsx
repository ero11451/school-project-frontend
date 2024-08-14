import { Icategory } from "./Icategory";


export interface Ipost {
    id?: number;
    title?: string;
    content?: string;
    imgUrl?: string;
    videoUrl?: string;
    example?: string;
    code?: string;
    status: string;
    options?: Array <Itest>;
    categoryId?: number;
    category?: Icategory;
    locationId?: number;
    question?:string;
    location?: LocationModel;
    // teacherId?: number;
    // teacher?: UserModel;

}

// interfaces.ts
export interface Itest {
    id:number
    option ?:string
    isCorrect ?:boolean ,
    selected? :boolean
}

  
  export interface LocationModel {
    // Define the properties of LocationModel here
  }
  
  export interface UserModel {
    // Define the properties of UserModel here
  }
  
