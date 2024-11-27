import { Icategory } from "../interface/Icategory";
import api from "./interseptor";

export function categoryCreate(data:Icategory){
    return api.post('api/Categories', data);
 }

 export function categoryGetAll(){
    return api.get('api/Categories');
 }

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 export function categoryGetById(id:string): Promise<any> {
   return api.get('api/Categories/'+ id);
}


export function courseGetByCategoryId(query:{
   pageSize:number,
   page:number, 
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   categoryId:string| null | undefined}): Promise<any> {

   return api.get('api/Courses',  { params: query  } );

}
