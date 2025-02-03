
// import { IApiResponse } from "../interface/IApiRespons";
import { ICategory } from "../interface/ICategory";
import api from "./interseptor";

export function categoryCreate(data:ICategory){
    return api.post('api/categories', data);
 }

 export function categoryGetAll()  {
    return api.get('api/Category');
 }

 export function categoryGetById(id:string) {
   return api.get('api/Categories/'+ id);
}


export function courseGetByCategoryId(query:{
   pageSize:number,
   page:number, 
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   categoryId:string| null | undefined}): Promise<any> {

   return api.get('api/Courses',  { params: query  } );

}
