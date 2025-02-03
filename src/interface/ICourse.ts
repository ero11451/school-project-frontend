import { IUser } from "./IUser";

export interface ICourse {
     id?: string | null | undefined;
     courseName ?: string;
     description ? : string;
     thumbnailUrl ? : string;
     status  ? : string;
     totalClasses? : number;
     creatorId  ? : string;
     teacherId?: number;
     creator?: IUser;
     createdAt ?: string | null | undefined;
}



export interface ICourseURLParams { 
  pageSize:number, 
  pageNumber:number , 
  categoryId?:string | null | undefined, 
  search?:string | null | undefined, 
  sortBy?: string | null | undefined, 
}
  
  export interface LocationModel {
    // Define the properties of LocationModel here
  }
  
 
