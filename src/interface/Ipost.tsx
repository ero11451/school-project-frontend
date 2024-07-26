import { Icategory } from "./Icategory";


export interface Ipost {
    id: number;
    title: string;
    content: string;
    imgUrl: string;
    videoUrl: string;
    status: string;
    test?: TestModel;
    categoryId?: number;
    category?: Icategory;
    locationId?: number;
    location?: LocationModel;
    teacherId?: number;
    teacher?: UserModel;

}

// interfaces.ts
export interface TestModel {
    // Define the properties of TestModel here
  }
  

  
  export interface LocationModel {
    // Define the properties of LocationModel here
  }
  
  export interface UserModel {
    // Define the properties of UserModel here
  }
  
